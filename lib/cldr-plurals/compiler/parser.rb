# encoding: UTF-8

require 'cldr-plurals/compiler/nodes'

module CldrPlurals
  module Compiler
    class Parser

      OPERATORS = [
        :modulo, :equals, :not_equals
      ]

      SAMPLES = [
        :int_sample, :dec_sample
      ]

      class UnexpectedTokenError < StandardError; end

      attr_reader :token_list, :stack, :counter

      def initialize(token_list)
        @token_list = token_list
        @stack = []
        @counter = 0
      end

      def parse
        until eol? || SAMPLES.include?(current_token.type) do
          condition
        end

        Rule.new(stack.pop)
      end

      private

      # and/or
      def condition
        and_condition

        while consume(:or)
          and_condition
          stack.push(
            OrCondition.new(stack.pop, stack.pop)
          )
        end
      end

      def and_condition
        relation

        while consume(:and)
          relation
          stack.push(
            AndCondition.new(stack.pop, stack.pop)
          )
        end
      end

      def relation
        expr = expression

        stack.push(
          if OPERATORS.include?(current_token.type)
            Relation.new(expr, operator, value_set)
          else
            expr
          end
        )
      end

      def expression
        Expression.new(operand, operator, value_set)
      end

      def operand
        token = current_token
        consume!(:operand)
        Operand.new(token.value)
      end

      def operator
        token = current_token
        consume!(*OPERATORS)
        Operator.new(token.value)
      end

      def value_set
        values = [value]

        while current_token.type == :comma
          consume!(:comma)
          values << value
        end

        if values.size == 1
          values.first
        else
          ValueSet.new(values)
        end
      end

      def value
        first_token = current_token
        consume!(:number)

        case current_token.type
          when :range
            consume!(:range)
            second_token = current_token
            consume!(:number)
            Range.new(first_token.value, second_token.value)
          else
            first_token.value
        end
      end

      def next_token
        @counter += 1
        current_token
      end

      def current_token
        if eol?
          @eol_token ||= Token.new(nil, :eol)
        else
          token_list[counter]
        end
      end

      def consume!(*token_types)
        unless consume(*token_types)
          raise UnexpectedTokenError,
            "expected '#{token_types.join(', ')}', got '#{current_token.type}'"
        end
      end

      def consume(*token_types)
        if token_types.include?(current_token.type)
          next_token
          true
        else
          false
        end
      end

      def eol?
        counter >= token_list.size
      end

    end
  end
end
