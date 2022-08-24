class Api::TeamUsersController < ApplicationController

    def create
        if params[:userData] && params[:userData][:teamId]
            team = Team.find_by(id: params[:userData][:teamId])
            render json: ["No team provided"] unless team


            @user = User.find_by(username: params[:userData][:username])
            if @user 

            end
            @user = User.find_by(email: params[:userData][:email])
            if @user
                # debugger;
                if TeamUser.create(user_id: @user.id, team_id: team.id) 
                    render :template => "api/users/show"
                else
                    render json: ["User has already been added to the team"]
                end
            else
                render json: ["User was not found"]
            end
        else 
            render json: ["User not added"]
        end

    end
    
end