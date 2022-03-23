json.phones do
    json.array! @phones do |phone|
        json.id phone.id
        json.title phone.title
        json.color phone.color
        json.image phone.image
        json.size phone.size
        json.stock phone.stock
        json.storage phone.storage
        json.price phone.price
    end
    
end