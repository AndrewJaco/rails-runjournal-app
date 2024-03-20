class Api::V1::FriendshipsController < ApplicationController
  before_action :set_friendship, only: [:show, :update, :destroy]

  def index
    @friendships = Friendship.all
    render json: @friendships
  end

  def show
    render json: @friendship
  end

  def create
    @friendship = Friendship.new(friendship_params)

    if @friendship.save
      render json: @friendship, status: :created
    else
      render json: @friendship.errors, status: :unprocessable_entity
    end
  end

  def update
    if @friendship.update(friendship_params)
      render json: @friendship
    else
      render json: @friendship.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @friendship.destroy
  end

  private

  def set_friendship
    @friendship = Friendship.find(params[:id])
  end

  def friendship_params
    params.require(:friendship).permit(:user_id, :friend_id)
  end
end