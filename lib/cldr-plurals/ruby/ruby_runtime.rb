# encoding: UTF-8

module CldrPlurals
  module Ruby
    module RubyRuntime
      class << self

        def build_args_for(num_str)
          [
            to_num(n(num_str)),
            to_num(i(num_str)),
            to_num(f(num_str)),
            to_num(t(num_str)),
            to_num(v(num_str)),
            to_num(w(num_str))
          ]
        end

        def n(str)
          if str.include?('.')
            _n(str).gsub(/([0]+\z)/, '').chomp('.')
          else
            _n(str)
          end
        end

        def to_num(str)
          str.include?('.') ? str.to_f : str.to_i
        end

        # absolute value of the source number (integer and decimals).
        def _n(str)
          str.gsub(/(-)(.*)/, '\2')
        end

        private :_n

        # integer digits of n.
        def i(str)
          _n(str).gsub(/([\d]+)(\..*)/, '\1')
        end

        # visible fractional digits in n, with trailing zeros.
        def f(str)
          _n(str).gsub(/([\d]+\.?)(.*)/, '\2')
        end

        # visible fractional digits in n, without trailing zeros.
        def t(str)
          f(str).gsub(/([0]+\z)/, '')
        end

        # number of visible fraction digits in n, with trailing zeros.
        def v(str)
          f(str).length.to_s
        end

        # number of visible fraction digits in n, without trailing zeros.
        def w(str)
          t(str).length.to_s
        end

      end
    end
  end
end
