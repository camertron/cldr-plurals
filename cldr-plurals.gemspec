$:.unshift File.join(File.dirname(__FILE__), 'lib')
require 'cldr-plurals/version'

Gem::Specification.new do |s|
  s.name     = "cldr-plurals"
  s.version  = ::CldrPlurals::VERSION
  s.authors  = ["Cameron Dutro"]
  s.email    = ["camertron@gmail.com"]
  s.homepage = "http://github.com/camertron"

  s.description = s.summary = 'Tokenizes and parses CLDR plural rules and provides a mechanism for emitting them as source code'

  s.platform = Gem::Platform::RUBY
  s.has_rdoc = true

  s.require_path = 'lib'
  s.files = Dir["{lib,spec}/**/*", "Gemfile", "History.txt", "README.md", "Rakefile", "cldr-plurals.gemspec"]
end
