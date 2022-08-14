class Api::UsersController < ApplicationController
    def create
        @user = User.new(user_params)
        @user.first_name = params[:user][:firstName]
        @user.last_name = params[:user][:lastName]
        if @user.save
            login(@user)
            render :show
        else
            render json: @user.errors.full_messages, status: 401
        end
    end

    private

    def user_params
        params.require(:user).permit(:username, :email, :password)
    end
end