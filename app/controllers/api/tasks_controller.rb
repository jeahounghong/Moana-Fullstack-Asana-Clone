class Api::TasksController < ApplicationController

    def index
        project = Project.find_by(id: params[:project_id])
        section = Section.find_by(id: params[:section_id])
        if project && current_user
            @tasks = project.tasks
            render :index
        elsif section && current_user
            # debugger;
            @tasks = section.tasks
            render :index
        else
            render json: ["Tasks were not retrieved"], status: 401
        end
    end


    private

    def task_params

    end
end