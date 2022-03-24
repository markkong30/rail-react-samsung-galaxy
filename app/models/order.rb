class Order < ApplicationRecord
    belongs_to :user
    belongs_to :phone
    has_many :charges

    validates :user, presence: true
    validates :phone, presence: true


    def is_paid?
        self.charges.pluck(:complete).include?(true)
    end

end
