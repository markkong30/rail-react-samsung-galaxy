module Api
    class PhonesController < ApplicationController
      def index
        @phones = Phone.all
        render 'api/phones/index'
      end
      
    end
  end