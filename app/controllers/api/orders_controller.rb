module Api
    class OrdersController < ApplicationController
      def create
        token = cookies.signed[:samsung_session_token]
        session = Session.find_by(token: token)
        return render json: { error: 'user not logged in' }, status: :unauthorized if !session
  
        phone = Phone.find_by(title: params[:phone][:title], storage: params[:phone][:storage])
        return render json: { error: 'cannot find phone' }, status: :not_found if !phone
  
        begin
          @order = Order.create({ user_id: session.user.id, phone_id: phone.id })
          render 'api/orders/create', status: :created
        rescue ArgumentError => e
          render json: { error: e.message }, status: :bad_request
        end
      end

      def detail
        token = cookies.signed[:samsung_session_token]
        session = Session.find_by(token: token)
        return render json: { error: 'user not logged in' }, status: :unauthorized if !session

        @order = Order.find_by(id: params[:id])
        return render json: { error: 'cannot find order' }, status: :not_found if !@order

        return render 'api/orders/detail', status: :ok

      end

      
    end
  end