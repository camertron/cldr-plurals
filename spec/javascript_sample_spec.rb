# encoding: UTF-8

require 'v8'
require 'yaml'
require 'spec_helper'
require 'cldr-plurals/javascript_runtime'

include CldrPlurals
include CldrPlurals::Compiler

describe 'ruby rules' do
  each_rule do |locales, rule, samples|
    context = V8::Context.new
    js_code = JavascriptEmitter.emit_rule_standalone(rule)
    rule_obj = context.eval(js_code)
    runtime = context.eval(JavascriptRuntime.source)

    samples.each do |sample_info|
      context "#{sample_info[:type]} samples" do
        sample_info[:samples].each do |sample|
          it sample do
            args = runtime.buildArgsFor(sample)
            expect(rule_obj.call(*args)).to eq(true)
          end
        end
      end
    end
  end
end

describe 'ruby rule lists' do
  each_rule_list do |rule_list, samples_per_name|
    context rule_list.locale do
      context = V8::Context.new
      js_code = rule_list.to_code(:javascript)
      rule_proc = context.eval(js_code)
      runtime = context.eval(JavascriptRuntime.source)

      samples_per_name.each_pair do |name, samples|
        samples.each do |sample|
          it "#{name} #{sample}" do
            expect(rule_proc.call(sample, runtime)).to eq(name.to_s)
          end
        end
      end
    end
  end
end
