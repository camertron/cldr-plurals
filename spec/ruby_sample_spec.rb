# encoding: UTF-8

require 'yaml'
require 'spec_helper'
require 'cldr-plurals/ruby_runtime'

include CldrPlurals
include CldrPlurals::Compiler

describe 'ruby rules;' do
  Samples.each_rule do |locales, rule, samples|
    context "locales: #{locales}, rule: #{rule.name};" do
      ruby_code = RubyEmitter.emit_rule_standalone(rule)
      rule_proc = eval(ruby_code)

      samples.each do |sample_info|
        context "#{sample_info[:type]} samples" do
          sample_info[:samples].each do |sample|
            it sample do
              args = RubyRuntime.build_args_for(sample)
              expect(rule_proc.call(*args)).to eq(true)
            end
          end
        end
      end
    end
  end
end

describe 'ruby rule lists' do
  Samples.each_rule_list do |rule_list, samples_per_name|
    context rule_list.locale do
      ruby_code = rule_list.to_code(:ruby)
      rule_proc = eval(ruby_code)

      samples_per_name.each_pair do |name, samples|
        samples.each do |sample|
          it "#{name} #{sample}" do
            expect(rule_proc.call(sample, RubyRuntime)).to eq(name)
          end
        end
      end
    end
  end
end
