class Api::SectionsController < ApplicationController

    def index
        # debugger;
        project = Project.find_by(id: params[:project_id])
        if current_user && project
            @sections = project.sections
            render :index
        else
            render json: ["Sections were not found"], status: 401 
        end
    end

    def update
        @section = Section.find_by(id: params[:id])
        if @section.update(section_params)
            render :show
        else
            render json: @section.errors.full_messages
        end
    end

    def create
        @section = Section.new(section_params)
        if @section.save
            render :show
        else
            render json: @section.errors.full_messages, status: 401
        end
    end

    def destroy
        @section = Section.find_by(id: params[:id])
        if @section && current_user
            @section.destroy
            render json: ["Section successfully deleted"]
        else
            render json: ["Section was either not found or not deleted"], status: 401
        end
    end

    private

    def section_params
        params.require(:section).permit(:project_id, :title)
    end

end