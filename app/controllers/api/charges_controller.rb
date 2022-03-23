module Api
    class ChargesController < ApplicationController
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
            description: "Your order is for Galaxy S22 Ultra 5G, #{phone.title}, #{phone.storage}GB.",
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
    end
  end