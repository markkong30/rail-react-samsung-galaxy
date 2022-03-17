json.user do
    json.user_id @user.id
    json.username @user.username
    json.email @user.email
    json.address @user.address
    json.phone_number @user.phone_number
  end
  