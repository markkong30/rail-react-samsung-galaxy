json.orders do
    json.array! @orders do |order|
        json.id order.id
        json.paid order.is_paid?
        
        json.phone do
            json.phone_id order.phone.id
            json.title order.phone.title
            json.display_title order.phone.display_title
            json.color order.phone.color
            json.image order.phone.image
            json.size order.phone.size
            json.stock order.phone.stock
            json.storage order.phone.storage
            json.price order.phone.price
    end
    end
end