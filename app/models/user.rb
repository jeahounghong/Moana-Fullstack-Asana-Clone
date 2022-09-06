# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  first_name      :string
#  last_name       :string
#
class User < ApplicationRecord

    attr_reader :password

    validates :username, presence: true, uniqueness: true
    validates :email, presence: true, uniqueness: true
    validates :password_digest, :session_token, presence: true
    validates :first_name, :last_name, presence: true
    validate :valid_email
    validates :password, length: { minimum: 6 }, allow_nil: true
    after_initialize :ensure_session_token

    has_many :team_users, dependent: :destroy
    has_many :project_users, dependent: :destroy
    has_many :joined_projects, through: :project_users, source: :project
    has_many :tasks

    
    has_many :teams, through: :team_users

    has_many :projects, through: :teams

    def self.find_by_credentials(username,password)
        user = User.find_by(username: username)
        return nil unless user
        user.is_password?(password) ? user : nil
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def ensure_session_token
        self.session_token ||= SecureRandom::urlsafe_base64
    end

    def reset_session_token!
        self.session_token = SecureRandom::urlsafe_base64
        self.save
        self.session_token
    end

    # Custom Validations
    def valid_email

        count = 0;
        email = self.email

        if email == nil
            errors.add(:email, "is a required field")
        else
            email.each_char do |c|
                count += 1 if c == "@"
            end
            errors.add(:email, "is not valid.") unless count == 1
        end

    end

    # attr_reader :email

end
