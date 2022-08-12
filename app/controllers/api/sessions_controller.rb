class Api::SessionsController < ApplicationController
    def create
        p params
        @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
        if @user
            login(@user)
            render 'api/users/show'
        else
            render json: ['Nope. Wrong credentials!'], status: 401
        end
    end



    def destroy
        if current_user
            logout!
            render json: { message: 'Logout successful'}
        else
            render json: ['Logout unsuccessful'], status: 404
        end
    end
end