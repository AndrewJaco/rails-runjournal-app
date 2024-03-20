class ActivitiesController < ApplicationController
  before_action :set_user
  before_action :set_activity, only: [:show, :edit, :update, :destroy]

  def index
    @activities = @user.activities
  end

  def show
  end

  def new
    @activity = @user.activities.build
  end

  def create
    @activity = @user.activities.build(activity_params)
    if @activity.save
      redirect_to user_activity_path(@user, @activity), notice: 'Activity was successfully created.'
    else
      render :new
    end
  end

  def edit
  end

  def update
    if @activity.update(activity_params)
      redirect_to user_activity_path(@user, @activity), notice: 'Activity was successfully updated.'
    else
      render :edit
    end
  end

  def destroy
    @activity.destroy
    redirect_to user_activities_path(@user), notice: 'Activity was successfully destroyed.'
  end

  private

  def set_user
    @user = User.find(params[:user_id])
  end

  def set_activity
    @activity = @user.activities.find(params[:id])
  end

  def activity_params
    params.require(:activity).permit(:name, :description, :duration)
  end
end
