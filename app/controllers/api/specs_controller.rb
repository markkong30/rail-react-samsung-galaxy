module Api
    class SpecsController < ApplicationController
      def index
        @specs = Spec.all
        render 'api/specs/index'
      end
      
    end
  end