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

    def update
        @task = Task.find_by(id: params[:id])
        @task.owner_id = params[:task][:ownerId]
        @task.owner_type = params[:task][:ownerType]
        if @task.update(task_params)
            # debugger;
            render :show
        else
            render json: ["not updated"], status: 401
        end
    end

    def create
        # debugger;
        @task = Task.new(task_params);
        
        if @task.save
            # debugger
            render :show
        else
            # debugger;
            render json: ["Task was not created"], status: 401
        end
    end

    def destroy
        @task = Task.find(params[:id])
        if @task.destroy
            # debugger
            render json: ["Task was successfully deleted"]
        else
            render json: ["Task was not deleted"], status: 401
        end
    end

    private

    def task_params
        params.require(:task).permit(:id, :title, :owner_type, :owner_id, :description, :complete, :due_date, :userId )
    end
end