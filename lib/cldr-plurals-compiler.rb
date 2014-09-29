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
      @rules = []
    end

    def add_rule(name, rule_string)
      rule = Parser.new(Tokenizer.tokenize(rule_string)).parse
      rule.name = name
      rules << rule
      nil
    end

    def to_code(prog_lang)
      emitter = find_emitter(prog_lang)
      emitter.emit_rules(self)
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
end
