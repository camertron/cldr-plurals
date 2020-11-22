# encoding: UTF-8

require 'rubygems' unless ENV['NO_RUBYGEMS']

require 'bundler'
require 'rspec/core/rake_task'
require 'rubygems/package_task'

require './lib/cldr-plurals'
require './spec/samples'
require 'cldr-plurals/javascript_runtime'

Bundler::GemHelper.install_tasks

task :default => :spec

desc 'Run specs'
RSpec::Core::RakeTask.new do |t|
  t.pattern = './spec/**/*_spec.rb'
end

def expand_sample_range(sample_range)
  first, last = sample_range.split('~')

  if decimal_idx = first.index('.')
    decimal = first[(decimal_idx + 1)..-1]
    increment = 1.0 / (10 ** decimal.length)
    current = first.to_f
    last_f = last.to_f
    results = []

    while current <= last_f
      results << current.to_s
      current = (current + increment).round(decimal.length)
    end

    results
  else
    (first.to_i..last.to_i).to_a.map(&:to_s)
  end
end

def expand_samples(sample_str)
  sample_str.split(', ').flat_map do |sample_chunk|
    if sample_chunk.include?('~')
      expand_sample_range(sample_chunk)
    else
      [sample_chunk]
    end
  end
end

task :update_samples do
  require 'open-uri'
  require 'nokogiri'
  require 'yaml'

  url = 'https://raw.githubusercontent.com/unicode-org/cldr/release-38/common/supplemental/plurals.xml'
  doc = Nokogiri::XML(open(url).read)

  samples = (doc / 'pluralRules').each_with_object({}) do |rules, ret|
    locales = rules.attributes['locales'].value.split(' ').join('/')

    ret[locales] = (rules / 'pluralRule').map do |rule|
      chunks = rule.text.split(/(@integer|@decimal)/)
      name = rule.attributes['count'].value.to_sym

      {
        text: chunks.first.strip,
        name: name,
        samples: chunks[1..-1].each_slice(2).map do |slice|
          {
            type: slice.first.strip,
            samples: expand_samples(slice.last.strip.chomp(', …'))
          }
        end
      }
    end
  end

  File.open(File.join(File.dirname(__FILE__), 'spec/samples.yml'), 'w+') do |f|
    f.write(YAML.dump(samples))
  end
end

task :update_js_tests do
  indented_source = CldrPlurals::JavascriptRuntime
    .source
    .split("\n")
    .map { |line| "  #{line}" }
    .join("\n")
    .strip

  result = ''.tap do |js|
    js << "( () => {\n"
    js << "  const runtime = #{indented_source}\n\n"
    js << "  describe('javascript rules', () => {\n"

    Samples.each_rule.with_index do |(locales, rule, samples), rule_idx|
      js << "\n" if rule_idx > 0
      js << "    describe('#{locales}', () => {\n"
      js << "      const rule = #{CldrPlurals::JavascriptEmitter.emit_rule_standalone(rule)};\n\n"

      samples.each_with_index do |sample_info, idx|
        js << "\n" if idx > 0
        js << "      describe('#{sample_info[:type]}', () => {\n"
        sample_info[:samples].each do |sample|
          js << "        it('#{sample}', () => {\n"
          js << "          expect(rule(...runtime.buildArgsFor('#{sample}'))).toEqual(true);\n"
          js << "        });\n"
        end

        js << "      });\n"
      end

      js << "    });\n"
    end

    js << "  });\n\n"

    js << "  describe('javascript rule lists', () => {\n"

    Samples.each_rule_list.with_index do |(rule_list, samples_per_name), idx|
      js << "\n" if idx > 0
      js << "    describe('#{rule_list.locale}', () => {\n"
      js << "      const ruleList = #{rule_list.to_code(:javascript)};\n\n"

      samples_per_name.each_pair do |name, samples|
        samples.each do |sample|
          js << "      it('#{name} #{sample}', () => {\n"
          js << "        expect(ruleList('#{sample}', runtime)).toEqual('#{name}');\n"
          js << "      });\n"
        end
      end

      js << "    });\n"
    end

    js << "  });\n"

    js << "})();\n"
  end

  File.write('./spec/javascript_sample_spec.js', result)
end
