class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :recoverable, :confirmable, :lockable, :registerable, :timeoutable
  devise :database_authenticatable, :rememberable, :trackable, :validatable

  devise :omniauthable, omniauth_providers: [:fitbit, :foursquare]

  alias_attribute :to_s, :email

  validates :email, :provider, :uid, presence: true
end
