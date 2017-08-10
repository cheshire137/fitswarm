class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :recoverable, :confirmable, :lockable, :registerable, :timeoutable,
  # :trackable
  devise :database_authenticatable, :rememberable, :validatable

  devise :omniauthable, omniauth_providers: [:fitbit, :foursquare]

  alias_attribute :to_s, :email

  validates :email, :foursquare_uid, presence: true
  validates :email, uniqueness: true

  scope :with_email, ->(email) { where(email: email) }

  def authenticated_with_fitbit?
    fitbit_uid.present?
  end
end
