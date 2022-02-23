class User < ApplicationRecord
    # Define some constraint and validation
    has_secure_password
    validates_presence_of :email
    validates_uniqueness_of :email

end
