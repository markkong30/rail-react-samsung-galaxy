module Api
    class PhonesController < ApplicationController
      def index
        @phones = Phone.all
        render 'api/phones/index', status: :ok
      end
      
      def stock
        @phone = Phone.find_by(title: params[:title], storage: params[:storage])
        return render json: { error: 'not_found' }, status: :not_found if !@phone

        render 'api/phones/stock', status: :ok
      end
    end
  end