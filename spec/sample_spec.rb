# encoding: UTF-8

require 'yaml'
require 'spec_helper'

require 'cldr-plurals-compiler/ruby_runtime'

include CldrPluralsCompiler

describe 'samples' do
  samples_file = File.join(File.expand_path(File.dirname(__FILE__)), 'samples.yml')

  YAML.load_file(samples_file).each_pair do |locales, rules|
    context locales do
      rules.each do |rule|
        next if rule[:rule].empty?  # @TODO handle 'other' case
        tokens = Tokenizer.tokenize(rule[:rule])
        ast = Parser.new(tokens).parse
        ruby_code = RubyEmitter.emit_rule_standalone(ast)
        rule_proc = eval(ruby_code)

        rule[:samples].each do |sample_info|
          context "#{sample_info[:type]} samples" do
            sample_info[:samples].each do |sample|
              it sample do
                # binding.pry if locales == 'bs/hr/sh/sr' && sample_info[:type] == '@integer' && sample == '2'
                args = RubyRuntime.build_args_for(sample)
                expect(rule_proc.call(*args)).to eq(true)
              end
            end
          end
        end
      end
    end
  end
end
