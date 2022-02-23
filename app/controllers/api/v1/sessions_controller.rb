class SessionsController < ApplicationController

    def create
        user = User.find_by(
            email: params[:user][:email],
            password: params[:user][:password],
            password_confirmation: params[:user][:password_confirmation]
        )
        # Check if the user was found
        if user
            render json: {
                status: :created,
                user: user
            }
        else
            render json: { status: 500 }
        end
    end
end