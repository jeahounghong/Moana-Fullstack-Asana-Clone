class Api::ProjectsController < ApplicationController

    def index
        team = Team.find_by(id: params[:team_id])
        user = User.find_by(id: params[:user_id])
        if team 
            @projects = team.projects
            render :index
        elsif user
            @projects = user.projects
            render :index
        else
            render json: ["Projects were not found"], status: 401
        end
    end

    def create
        @project = Project.new(project_params)
        if current_user && @project.save
            ProjectUser.create(user_id: current_user.id, project_id: @project.id)
            render :show
        else
            render json: ["Project was not created"], status: 401
        end
    end

    def update
        @project = Project.find_by(id: params[:id])
        if @project && @project.update(project_params)
            render :show
        else
            render json: ["Project was not updated"], status: 401
        end
    end

    def destroy
        @project = Project.find_by(id: params[:id])
        if @project && @project.destroy
            render json: ["Project successfully deleted."]
        else
            render json: ["Project was not deleted."], status: 401
        end
    end

    private

    def project_params
        params.require(:project).permit(:team_id, :title, :description, :public)
    end



end