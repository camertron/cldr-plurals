# encoding: UTF-8

module CldrPlurals
  class RubyEmitter < Compiler::Emitter
    class << self

      RUNTIME_VARS = %w(n i v w f t)

      def emit_rules(rule_list)
        parts = rule_list.rules.map do |rule|
          "(#{emit_rule(rule)} ? :#{rule.name} : "
        end + [':other']

        chooser = "#{parts.join('')}#{')' * (parts.size - 1)}"
        "lambda { |num, runtime| #{build_runtime_vars}; #{chooser} }"
      end

      def emit_rule(rule)
        emit(rule.root)
      end

      def emit_rule_standalone(rule)
        "lambda { |n, i, f, t, v, w| #{emit_rule(rule)} }"
      end

      protected

      def build_runtime_vars
        RUNTIME_VARS.map do |var|
          "#{var} = runtime.#{var}(num)"
        end.join('; ')
      end

      def emit_or_condition(cond)
        "(#{emit(cond.left)} || #{emit(cond.right)})"
      end

      def emit_and_condition(cond)
        "(#{emit(cond.left)} && #{emit(cond.right)})"
      end

      def emit_expression(expr)
        case expr.value
          when CldrPlurals::Compiler::Range
            neg = expr.operation.symbol == '!=' ? '!' : ''
            "#{neg}(#{emit_range_check(expr.value, expr.operand)})"
          when CldrPlurals::Compiler::ValueSet
            "(#{emit_value_set(expr.value, expr.operand, expr.operation)})"
          else
            emit_all(expr.operand, expr.operation, expr.value).join(' ')
        end
      end

      def emit_relation(rel)
        case rel.value
          when CldrPlurals::Compiler::Range
            expr = emit(rel.expression)
            neg = rel.operation.symbol == '!=' ? '!' : ''
            "#{neg}(#{emit_range_check(rel.value, expr)})"
          when CldrPlurals::Compiler::ValueSet
            "(#{emit_value_set(rel.value, rel.expression, rel.operation)})"
          else
            emit_all(rel.expression, rel.operation, rel.value).join(' ')
        end
      end

      def emit_value_set(value_set, operand, operator)
        values = value_set.values.map do |value|
          case value
            when CldrPlurals::Compiler::Range
              neg = operator.symbol == '!=' ? '!' : ''
              "#{neg}(#{emit_range_check(value, operand)})"
            else
              "(#{emit(operand)} #{emit(operator)} #{emit(value)})"
          end
        end

        if operator.symbol == '!='
          values.join(' && ')
        else
          values.join(' || ')
        end
      end

      def emit_range_check(range, operand)
        # a..b represents all *integers* between a and b, inclusive.
        n = emit(operand)
        "(#{n}.floor == #{n}) && (#{n} >= #{range.start}) && (#{n} <= #{range.finish})"
      end

      def emit_operator(op)
        case op.symbol
          when '='
            '=='
          else
            op.symbol
        end
      end

      def emit_operand(op)
        op.symbol
      end

      def emit_string(str)
        str
      end

    end
  end
end
