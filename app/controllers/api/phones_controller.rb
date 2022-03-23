module Api
    class PhonesController < ApplicationController
      def index
        @phones = Phone.order(:created_at)
        render 'api/phones/index', status: :ok
      end
      
      def stock
        @phone = Phone.find_by(title: params[:title], storage: params[:storage])
        return render json: { error: 'not_found' }, status: :not_found if !@phone

        render 'api/phones/stock', status: :ok
      end

      def update
        @phone = Phone.find_by(id: params[:id])
        return render json: { error: 'not_found' }, status: :not_found if !@phone

        @phone.update(stock: params[:stock])

        render 'api/phones/update', status: :ok
      end

    end
  end