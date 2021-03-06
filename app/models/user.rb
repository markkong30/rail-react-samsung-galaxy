class User < ApplicationRecord
    has_many :sessions
    has_many :orders

    validates :username, presence: true, length: { minimum: 3, maximum: 64 }
    validates :password, presence: true, length: { minimum: 8, maximum: 64 }
    validates :email, presence: true, length: { minimum: 5, maximum: 500 }
    validates :address, length: { minimum: 5, maximum: 500 }
    validates :phone_number, length: { minimum: 5, maximum: 20 }


    validates_uniqueness_of :username
    validates_uniqueness_of :email
    # validates_uniqueness_of :phone_number
    # validates_uniqueness_of :address

    
    after_validation :hash_password, on: :create
  
    private
  
    def hash_password
      self.password = BCrypt::Password.create(self.password)
    end

end
