require 'time_util'

class ApplicationController < ActionController::Base
  include TimeUtil
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

end
