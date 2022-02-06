class Api::V1::DishesController < ApplicationController
    def index
        # Render the json data for all the dishes
        dishes = Dish.all.order(created_at: :desc)
        render json: dishes
    end

    def show
    end

    def update
    end
end
