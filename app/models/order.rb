class Order < ApplicationRecord
    belongs_to :user
    belongs_to :phone
    has_many :charges

    validates :user, presence: true
    validates :phone, presence: true

end
