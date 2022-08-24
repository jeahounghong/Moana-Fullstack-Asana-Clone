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

    def destroy
        @team = Team.find_by(id: params[:id])
        if @team.destroy
            render json: ["Team successfully deleted"]
        else
            render json: @team.errors.full_messages;
        end
    end

    def update
        @team = Team.find_by(id: params[:id])
        if @team && @team.update(team_params)
            render :show
        else
            render json: ["Changes were not successfully changed."], status: 401
        end
    end

    def show
        @team = Team.find_by(id: params[:id])
        if @team
            render :show
        else
            render json: ["Team not found"], status: 404
        end
    end

    private

    def team_params
        params.require(:team).permit(:name, :description)
    end
end