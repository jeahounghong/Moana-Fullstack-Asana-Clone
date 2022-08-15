class Api::SectionsController < ApplicationController

    def index
        project = Project.find_by(id: params[:project_id])
        if current_user && project
            @sections = project.sections
            render :index
        else
            render json: ["Sections were not found"], status: 401 
        end
    end

end