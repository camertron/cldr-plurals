source "https://rubygems.org"

gemspec

group :development, :test do
  gem 'pry-nav'
  gem 'rake'
  gem 'nokogiri'
end

group :test do
  gem 'rspec'
  gem 'rr'

  gem 'therubyracer', '~> 0.12.0'
  gem 'cldr-plurals-runtime-rb', '~> 1.0.0'
  gem 'cldr-plurals-runtime-js', '~> 1.0.0'

  gem 'libv8', '= 3.16.14.11' # 2016-04-20 lock to older working version on Clang/OS X (3.16.14.13 won't compile)
end
