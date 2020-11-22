require 'yaml'

class Samples
  ADDITIONAL_SAMPLES = {
    "ar" => { other: %w(3.1 3.2 3.3) } # improve test coverage for Arabic
  }

  class << self
    def each_rule
      return to_enum(__method__) unless block_given?

      samples.each_pair do |locales, rules|
        rules.each do |rule|
          next if rule[:text].empty?  # skip other rule test, as it's a fallback
          tokens = CldrPlurals::Compiler::Tokenizer.tokenize(rule[:text])
          rule_ast = CldrPlurals::Compiler::Parser.new(tokens).parse
          rule_ast.name = rule[:name]
          yield locales, rule_ast, rule[:samples]
        end
      end
    end

    def each_rule_list
      return to_enum(__method__) unless block_given?

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

    private

    def samples
      YAML.load_file(samples_file)
    end

    def samples_file
      File.join(File.expand_path(File.dirname(__FILE__)), 'samples.yml')
    end
  end
end
