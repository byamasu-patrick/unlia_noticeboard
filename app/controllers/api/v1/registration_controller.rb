class Api::V1::RegistrationController < ApplicationController

    # Create a user account
    # def index
    #     render json: Dish.all
    # end
    def create
        #puts params
        render json: {
            status: "Arrived"
        }
        # user = User.create! (
        #     {
        #         name: params[:user][:name],
        #         profile: params[:user][:profile],
        #         location: params[:user][:location],
        #         email: params[:user][:email],
        #         password: params[:user][:password],
        #         password_confirmation: params[:user][:password_confirmation]
        #     }
        # )
        # #Login the user after creating the password
        # if user
        #     session[:user_id] = user.id
        #     render json: {
        #         status: :created,
        #         user: user
        #     } 
        # else
        #     render json: {
        #         status: 500
        #     }
        # end
    end
    def user_params
        #params.require(:user).permit(:name, :profile, :location, :email, :password, :password_confirmation)
    end
end
