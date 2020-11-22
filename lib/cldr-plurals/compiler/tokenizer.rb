# encoding: UTF-8

module CldrPlurals
  module Compiler
    class Token
      attr_reader :value, :type

      def initialize(value, type)
        @value = value
        @type = type
      end
    end

    class Tokenizer

      TOKENS = {
        /@integer/  => :int_sample,
        /@decimal/  => :dec_sample,
        /\u2026/    => :infinite_set,
        /~/         => :sample_range,
        /and/       => :and,
        /or/        => :or,
        /[niftvwe]/ => :operand,
        /,/         => :comma,
        /\.\./      => :range,
        /%/         => :modulo,
        /=/         => :equals,
        /\!=/       => :not_equals,
        /[\d]+/     => :number
      }

      ALL_TOKENS = Regexp.compile(
        TOKENS.map { |r, _| r.source }.join('|')
      )

      def self.tokenize(text)
        text.scan(ALL_TOKENS).each_with_object([]) do |token, ret|
          found_type = TOKENS.each_pair do |regex, token_type|
            break token_type if token =~ regex
          end

          if found_type.is_a?(Symbol)
            ret << make_token(token, found_type)
          end
        end
      end

      private

      def self.make_token(value, type)
        Token.new(value, type)
      end

    end
  end
end
