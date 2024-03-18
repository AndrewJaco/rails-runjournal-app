class User < ApplicationRecord
  before_create :set_jti
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :validatable, :jwt_authenticatable, jwt_revocation_strategy: self

  def set_jti
    self.jti = SecureRandom.uuid
  end

  def self.jwt_revoked?(payload, user)
    user.jti != payload['jti']  
  end

  def self.on_jwt_dispatch(token, payload)
    
end
