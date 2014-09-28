# encoding: UTF-8

module CldrPluralsCompiler
  autoload :Tokenizer,   'cldr-plurals-compiler/tokenizer'
  autoload :Parser,      'cldr-plurals-compiler/parser'
  autoload :Emitter,     'cldr-plurals-compiler/emitter'
  autoload :RubyEmitter, 'cldr-plurals-compiler/ruby_emitter'

  class RuleList
    attr_reader :locale, :rules

    def initialize(locale)
      @locale = locale
      @rules = {}
    end

    def add_rule(name, rule_string)
      rules[name] = Parser.new(
        Tokenizer.tokenize(rule_string)
      ).parse
      nil
    end

    def each_in(prog_lang)
      if block_given?
        emitter = find_emitter(prog_lang)

        rules.each_pair do |name, rule|
          yield name, emitter.emit_rule(rule)
        end

        nil
      else
        to_enum(__method__, prog_lang)
      end
    end

    private

    def find_emitter(prog_lang)
      lang = prog_lang.to_s.gsub(/(^\w|[-_]\w)/) { $1[-1].upcase }
      const_name = "#{lang}Emitter"

      if CldrPluralsCompiler.const_defined?(const_name)
        CldrPluralsCompiler.const_get(const_name)
      else
        raise ArgumentError, "emitter '#{const_name}' not found."
      end
    end
  end

  def self.create(locale)
    RuleList.new(locale)
  end
end
