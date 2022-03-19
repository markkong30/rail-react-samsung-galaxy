json.specs do
    json.array! @specs do |spec|
        json.size spec.size
        json.storage spec.storage
        json.price spec.price
    end
   
end