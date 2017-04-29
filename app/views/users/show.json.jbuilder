json.user do
  json.auth true
  json.email @user.email
  json.authenticityToken form_authenticity_token
end
