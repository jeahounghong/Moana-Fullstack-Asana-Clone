class Api::TeamsController < ApplicationController

    def create
        @team = Team.new(team_params)
        debugger;
        if @team.save 
            render :show
        else
            render json: @team.errors.full_messages, status: 401
        end
    end

    def index
        debugger
    end

    private

    def team_params
        params.require(:team).permit(:name, :description)
    end
end