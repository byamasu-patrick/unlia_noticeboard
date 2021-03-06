class SessionsController < ApplicationController
    # Include the CurrentUserConcern
    include CurrentUserConcern
    def create
       user = User.find_by(email: params[:user][:email])
       .try(:authenticate, params[:user][:password])
        # Check if the user was found
        if user
            # Store the session
            session[:user_id] = user.id
            render json: {
                status: :created,
                logged_in:  true,
                user: user
            }
        else
            render json: { status: 401 }
        end
    end
    # Check if the user is logged in in the system
    def logged_in

        puts "*****************************User Check Proceess....*****************"
        # if @current_user
        #     render json: {
        #         logged_in: true,
        #         user: @current_user
        #     }
        # else
        #     render json: {
        #         logged_in: false
        #     }
        # end
        render json: {
            status: :okay
        }

    end
    # Logout the user in the system
    def logout
        reset_session
        render json: {
            status: 200,
            logged_out: true
        }
    end
end