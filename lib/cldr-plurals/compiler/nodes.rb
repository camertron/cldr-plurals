# encoding: UTF-8

module CldrPlurals
  module Compiler
    class Rule
      attr_reader :root
      attr_accessor :name

      def initialize(root)
        @root = root
      end
    end

    # i % 1
    class Expression
      attr_reader :operand, :operation, :value

      def initialize(operand, operation, value)
        @operand = operand
        @operation = operation
        @value = value
      end
    end

    # i % 1 = 0
    class Relation
      attr_reader :expression, :operation, :value

      def initialize(expression, operation, value)
        @expression = expression
        @operation = operation
        @value = value
      end

      def operand
        expression.operand
      end
    end

    # and/or
    class Condition
      attr_reader :right, :left

      def initialize(right, left)
        @right = right
        @left = left
      end
    end

    class AndCondition < Condition; end
    class OrCondition < Condition; end

    class Range
      attr_reader :start, :finish

      def initialize(start, finish)
        @start = start
        @finish = finish
      end
    end

    class ValueSet
      attr_reader :values

      def initialize(values)
        @values = values
      end
    end

    class Operator
      attr_reader :symbol

      def initialize(symbol)
        @symbol = symbol
      end
    end

    class Operand
      attr_reader :symbol

      def initialize(symbol)
        @symbol = symbol
      end
    end
  end
end
