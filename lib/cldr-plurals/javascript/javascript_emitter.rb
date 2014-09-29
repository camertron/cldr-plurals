# encoding: UTF-8

# @TODO: fixme
module CldrPlurals
  module Javascript
    class JavascriptEmitter < Emitter
      class << self

        def emit_rule(rule)
          "function(n, i, f, t, v, w) { return #{emit(rule.root)}; }"
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
            when CldrPlurals::Compiler::ValueSet
              "(#{emit_value_set(expr.value, expr.operand)})"
            else
              emit_all(expr.operand, expr.operation, expr.value).join(' ')
          end
        end

        def emit_relation(rel)
          case rel.value
            when CldrPlurals::Compiler::Range
              expr = emit(rel.expression)
              "((#{expr} >= #{rel.value.start}) && (#{expr} <= #{rel.value.finish}))"
            when CldrPlurals::Compiler::ValueSet
              expr = emit(rel.expression)
              "(#{emit_value_set(rel.value, expr)})"
            else
              emit_all(rel.expression, rel.operation, rel.value).join(' ')
          end
        end

        def emit_value_set(value_set, operand)
          value_set.values.map do |value|
            case value
              when CldrPlurals::Compiler::Range
                "((#{operand} >= #{value.start}) && (#{operand} <= #{value.finish}))"
              else
                "(#{operand} == #{emit(value)})"
            end
          end.join(' || ')
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
end
