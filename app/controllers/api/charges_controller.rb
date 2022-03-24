module Api
    class ChargesController < ApplicationController
      skip_before_action :verify_authenticity_token, only: [:mark_complete]

      def create
        token = cookies.signed[:samsung_session_token]
        session = Session.find_by(token: token)
        return render json: { error: 'user not logged in' }, status: :unauthorized if !session
  
        order = Order.find_by(id: params[:order_id])
        return render json: { error: 'cannot find order' }, status: :not_found if !order
  
        phone = order.phone
  
        session = Stripe::Checkout::Session.create(
          payment_method_types: ['card'],
          line_items: [{
            name: "Order for Samsung Galaxy S22 Ultra",
            description: "Your order is for Galaxy S22 Ultra 5G, #{phone.display_title}, #{phone.storage}GB.",
            amount: (phone.price * 100.0).to_i, 
            currency: "gbp",
            quantity: 1,
          }],
          success_url: "#{ENV['URL']}/user/#{order.id}/success",
          cancel_url: "#{ENV['URL']}#{params[:cancel_url]}",
        )
  
        @charge = order.charges.new({
          checkout_session_id: session.id,
          currency: 'gbp',
          amount: phone.price
        })
  
        if @charge.save
          render 'api/charges/create', status: :created
        else
          render json: { error: 'charge could not be created' }, status: :bad_request
        end
      end

      def mark_complete
        # You can find your endpoint's secret in your webhook settings
        endpoint_secret = ENV['STRIPE_MARK_COMPLETE_WEBHOOK_SIGNING_SECRET']
        payload = request.body.read
        event = nil
        # Verify webhook signature and extract the event
        # See https://stripe.com/docs/webhooks/signatures for more information.
        sig_header = request.env['HTTP_STRIPE_SIGNATURE']
        begin
          event = Stripe::Webhook.construct_event(
            payload, sig_header, endpoint_secret
          )
        rescue JSON::ParserError => e
          # Invalid payload
          return head :bad_request
        rescue Stripe::SignatureVerificationError => e
          # Invalid signature
          return head :bad_request
        end
        # Handle the checkout.session.completed event
        if event['type'] == 'checkout.session.completed'
          session = event['data']['object']
          # Fulfill the purchase, mark related charge as complete
          charge = Charge.find_by(checkout_session_id: session.id)
          return head :bad_request if !charge
          charge.update({ complete: true })
          
          #update stock
          phone = charge.order.phone
          phone.stock = phone.stock - 1
         phone.save!
          return head :ok
        end
        return head :bad_request
      end


    end
  end