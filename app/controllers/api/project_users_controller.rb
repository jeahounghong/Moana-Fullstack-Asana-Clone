class Api::ProjectUsersController < ApplicationController

    def create
        # debugger
        if params[:userData] && params[:userData][:projectId]
            
            @project = Project.find_by(id: params[:userData][:projectId] )
            render json: ["No project provided"] unless @project

            user = User.find_by(id: params[:userData][:userId])
            render json: ["User was not added"] unless user

            if ProjectUser.create(project_id: @project.id, user_id: user.id)
                render :template => "api/projects/show"
            else
                render json: ["User was not added to the project"], status: 401
            end

        else
            render json: ["User not added"], status: 401
        end

    end

end