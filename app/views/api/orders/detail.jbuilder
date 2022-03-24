json.order do
    json.id @order.id

    json.phone do
        json.phone_id @order.phone.id
        json.title @order.phone.title
        json.display_title @order.phone.display_title
        json.color @order.phone.color
        json.image @order.phone.image
        json.size @order.phone.size
        json.stock @order.phone.stock
        json.storage @order.phone.storage
        json.price @order.phone.price
    end

    json.user do
        json.user_id @order.user.id
        json.username @order.user.username
        json.email @order.user.email
        json.address @order.user.address
        json.phone_number @order.user.phone_number
    end

end