class User < ApplicationRecord

    attr_reader :password

    validates :username, presence: true, uniqueness: true
    validates :password_digest, :session_token, :email, presence: true
    validate :valid_email
    validates :password, length: { minimum: 6 }, allow_nil: true
    after_initialize :ensure_session_token

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
        email.each_char do |c|
            count += 1 if c == "@"
        end
        errors.add(:email, "is not valid.") unless count == 1
    end

    # attr_reader :email

end
