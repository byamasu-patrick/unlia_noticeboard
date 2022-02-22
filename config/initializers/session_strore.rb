# Set the configuration to allow cookies in both development and production mode
if Rails.env == 'production'
    # Use this configuration in production
    Rails.application.config.session_store :cookie_store, key: '_smart_restaurant', domain: 'jdh-authentication-app-api.herokuapp.com'
else
    # For the development mode
    Rails.application.config.session_store :cookie_store, key: '_smart_restaurant'
end