class User < ApplicationRecord
  include Devise::JWT::RevocationStrategies::JTIMatcher

  devise :database_authenticatable, :registerable,
         :validatable, :jwt_authenticatable, jwt_revocation_strategy: self

  has_many :friendships, dependent: :destroy

  has_many :friends, through: :friendships, source: :friend

  has_many :activities, dependent: :destroy

end
