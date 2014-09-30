# encoding: UTF-8

module CldrPlurals
  class JavascriptEmitter < Compiler::Emitter
    class << self

      RUNTIME_VARS = %w(n i v w f t)

      def emit_rules(rule_list)
        parts = rule_list.rules.map do |rule|
          "(#{emit_rule(rule)} ? '#{rule.name}' : "
        end + ["'other'"]

        chooser = "#{parts.join('')}#{')' * (parts.size - 1)}"
        "(function(num, runtime) { #{build_runtime_vars}; return #{chooser}; })"
      end

      def emit_rule(rule)
        emit(rule.root)
      end

      def emit_rule_standalone(rule)
        "(function(n, i, f, t, v, w) { return #{emit_rule(rule)}; })"
      end

      protected

      def build_runtime_vars
        RUNTIME_VARS.map do |var|
          "var #{var} = runtime.#{var}(num)"
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
            operand_str = emit(expr.operand)
            "#{neg}((#{operand_str} >= #{expr.value.start}) && (#{operand_str} <= #{expr.value.finish}))"
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
            "#{neg}((#{expr} >= #{rel.value.start}) && (#{expr} <= #{rel.value.finish}))"
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
              operand_str = emit(operand)
              "#{neg}((#{operand_str} >= #{value.start}) && (#{operand_str} <= #{value.finish}))"
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
