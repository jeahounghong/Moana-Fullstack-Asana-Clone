class Api::TeamsController < ApplicationController

    def create
        @team = Team.new(team_params)
        if current_user && @team.save
            TeamUser.create(user_id: current_user.id, team_id: @team.id, owner: true)
            render :show
        else
            render json: @team.errors.full_messages, status: 401
        end
    end

    def index
        user = User.find_by(id: params[:user_id])
        if user && user == current_user
            @teams = user.teams
            render :index
        else
            render json: ["Teams were not retrieved"], status: 401
        end
    end

    private

    def team_params
        params.require(:team).permit(:name, :description)
    end
end