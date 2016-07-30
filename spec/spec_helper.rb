# encoding: UTF-8

require 'rspec'
require 'pry-nav'
require 'cldr-plurals'

RSpec.configure do |config|
  config.mock_with :rr
end

ADDITIONAL_SAMPLES = {
  "ar" => { other: %w(3.1 3.2 3.3) } # improve test coverage for Arabic
}

def each_rule
  samples.each_pair do |locales, rules|
    rules.each do |rule|
      next if rule[:text].empty?  # skip other rule test, as it's a fallback
      tokens = CldrPlurals::Compiler::Tokenizer.tokenize(rule[:text])
      rule_ast = CldrPlurals::Compiler::Parser.new(tokens).parse
      yield locales, rule_ast, rule[:samples]
    end
  end
end


def each_rule_list
  samples.each_pair do |locales, rules|
    rule_list = CldrPlurals::Compiler::RuleList.new(locales)
    samples = {}

    rules.each do |rule|
      samples[rule[:name]] = rule[:samples]
      rule_list.add_rule(rule[:name], rule[:text]) unless rule[:text].empty?
    end

    samples_per_name = samples.each_with_object({}) do |(name, samples), ret|
      ret[name] = samples.flat_map do |sample_info|
        sample_info[:samples]
      end
    end

    (ADDITIONAL_SAMPLES[locales] || {}).each do |name, more_samples|
      samples_per_name[name].concat(more_samples)
    end

    yield rule_list, samples_per_name
  end
end

def samples
  YAML.load_file(samples_file)
end

def samples_file
  File.join(File.expand_path(File.dirname(__FILE__)), 'samples.yml')
end
