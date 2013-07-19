class Weather < ActiveRecord::Base
  attr_accessible :temperatureMax, :temperatureMin, :time
end
