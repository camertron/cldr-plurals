# encoding: UTF-8

module CldrPluralsCompiler
  class Emitter
    class << self

      protected

      def emit(obj)
        name = obj.class.name
          .split('::').last
          .gsub(/([a-z\d])([A-Z])/, '\1_\2')
          .downcase

        method_sym = :"emit_#{name}"

        if respond_to?(method_sym, true)
          send(method_sym, obj)
        end
      end

      def emit_all(*objs)
        objs.map { |obj| emit(obj) }
      end

    end
  end
end
