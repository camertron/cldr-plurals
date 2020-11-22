# encoding: UTF-8

require 'rspec'
require 'pry-byebug'
require 'cldr-plurals'
require './spec/samples'

RSpec.configure do |config|
  config.mock_with :rr
end
