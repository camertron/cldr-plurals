# encoding: UTF-8

module CldrPluralsCompiler
  class RubyEmitter < Emitter
    class << self

      def emit_rule(rule)
        "lambda { |n, i, f, t, v, w| #{emit(rule.root)} }"
      end

      protected

      def emit_or_condition(cond)
        "(#{emit(cond.left)} || #{emit(cond.right)})"
      end

      def emit_and_condition(cond)
        "(#{emit(cond.left)} && #{emit(cond.right)})"
      end

      def emit_expression(expr)
        case expr.value
          when CldrPluralsCompiler::ValueSet
            "(#{emit_value_set(expr.value, expr.operand)})"
          else
            emit_all(expr.operand, expr.operation, expr.value).join(' ')
        end
      end

      def emit_relation(rel)
        case rel.value
          when CldrPluralsCompiler::Range
            expr = emit(rel.expression)
            "(#{emit_range(rel.value)}).include?(#{expr})"
          when CldrPluralsCompiler::ValueSet
            expr = emit(rel.expression)
            "(#{emit_value_set(rel.value, expr)})"
          else
            emit_all(rel.expression, rel.operation, rel.value).join(' ')
        end
      end

      def emit_value_set(value_set, operand)
        value_set.values.map do |value|
          case value
            when CldrPluralsCompiler::Range
              "(#{emit_range(value)}).include?(#{emit(operand)})"
            else
              "(#{operand} == #{emit(value)})"
          end
        end.join(' || ')
      end

      def emit_range(range)
        "#{range.start}..#{range.finish}"
      end

      def emit_operator(op)
        case op.symbol
          when '='
            '=='
          else
            op.symbol
        end
      end

      def emit_string(str)
        str
      end

    end
  end
end
