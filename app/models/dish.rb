class Dish < ApplicationRecord
    validates :name, presence: true
    validates :image, presence: true
    validates :category, presence: true
    validates :price, presence: true
    validates :featured, presence: true
    validates :description, presence: true

    has_many :comments
end
