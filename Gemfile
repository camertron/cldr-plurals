source "https://rubygems.org"

gemspec

group :development, :test do
  gem 'pry-byebug'
  gem 'rake'
  gem 'nokogiri'
end

group :test do
  gem 'rspec'
  gem 'rr'

  gem 'cldr-plurals-runtime-rb', github: 'camertron/cldr-plurals-runtime-rb', branch: 'cldr38'
  gem 'cldr-plurals-runtime-js', '~> 1.0'
end
