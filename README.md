cldr-plurals
=================

[![Build Status](https://travis-ci.org/camertron/cldr-plurals.svg?branch=master)](http://travis-ci.org/camertron/cldr-plurals)

Tokenizes and parses CLDR plural rules and provides a mechanism for emitting them as source code.

## Installation

`gem install cldr-plurals`

## Usage

```ruby
require 'cldr-plurals'
```

## Rules

The CLDR data set contains [plural information](http://unicode.org/cldr/trac/browser/tags/release-26-d04/common/supplemental/plurals.xml) for numerous languages in an expression-based [format](http://www.unicode.org/reports/tr35/tr35-numbers.html#Language_Plural_Rules) defined by Unicode's TR35. This gem can tokenize, parse, and emit these rules as source code. Currently Ruby and Javascript are supported.

### Tokenizing

Generate a list of tokens using the `Tokenizer` class:

```ruby
tokens = CldrPlurals::Compiler::Tokenizer.tokenize(
  'v = 0 and i % 10 = 1 and i % 100 != 11'
)
```

### Parsing

Once you have a token list, the `Parser` class can turn them into an [abstract syntax tree](http://en.wikipedia.org/wiki/Abstract_syntax_tree), (i.e a `CldrPlurals::Compiler::Rule`) for you:

```ruby
rule = CldrPlurals::Compiler::Parser.new(tokens).parse
```

### Emitting

Rules can be emitted as either Ruby or Javascript source code via the appropriate `Emitter` class:

```ruby
ruby_code = CldrPlurals::RubyEmitter.emit_rule_standalone(rule)
```

For our example above, the emitted standalone ruby code looks like this:

```ruby
lambda { |n, i, f, t, v, w| ((v == 0 && i % 10 == 1) && i % 100 != 11) }
```

## Rule Lists

The CLDR data set defines groups of rules that together determine the plural form for a given number. Create a `RuleList` object to group rules together. `RuleList`s take care of the tokenizing and parsing steps for you:

```ruby
rules = CldrPlurals::Compiler::RuleList.new(:ru).tap do |rule_list|
  rule_list.add_rule(:one, 'v = 0 and i % 10 = 1 and i % 100 != 11')
  rule_list.add_rule(:few, 'v = 0 and i % 10 = 2..4 and i % 100 != 12..14')
  rule_list.add_rule(:many, 'v = 0 and i % 10 = 0 or v = 0 and i % 10 = 5..9 or v = 0 and i % 100 = 11..14')
end
```

Note that there's no need to add an explicit rule for the `other` plural form.

Rules can be emitted as a group as well via the `to_code` method, which accepts a target language as an argument:

```ruby
rules.to_code(:ruby)
```

Which produces:

```ruby
lambda { |num, runtime| n = runtime.n(num); i = runtime.i(num); v = runtime.v(num); w = runtime.w(num); f = runtime.f(num); t = runtime.t(num); (((v == 0 && i % 10 == 1) && i % 100 != 11) ? :one : (((v == 0 && (2..4).include?(i % 10)) && !(12..14).include?(i % 100)) ? :few : ((((v == 0 && i % 10 == 0) || (v == 0 && (5..9).include?(i % 10))) || (v == 0 && (11..14).include?(i % 100))) ? :many : :other))) }
```

OR

```ruby
rules.to_code(:javascript)
```

Which produces:

```javascript
(function(num, runtime) { var n = runtime.n(num); var i = runtime.i(num); var v = runtime.v(num); var w = runtime.w(num); var f = runtime.f(num); var t = runtime.t(num); return (((v == 0 && i % 10 == 1) && i % 100 != 11) ? 'one' : (((v == 0 && ((i % 10 >= 2) && (i % 10 <= 4))) && !((i % 100 >= 12) && (i % 100 <= 14))) ? 'few' : ((((v == 0 && i % 10 == 0) || (v == 0 && ((i % 10 >= 5) && (i % 10 <= 9)))) || (v == 0 && ((i % 100 >= 11) && (i % 100 <= 14)))) ? 'many' : 'other'))); })
```

## Executing Targets

You may have noticed that emitted target source code requires a runtime (the second argument). Runtimes provide methods to determine the 'parts' of a number, like the decimal portion or the number of decimals without trailing zeroes. Runtimes for [Ruby](https://github.com/camertron/cldr-plurals-runtime-rb) and [Javascript](https://github.com/camertron/cldr-plurals-runtime-js) exist as separate rubygems, so you'll need to include them in your project before being able to execute target code. Each runtime gem's README contains instructions on how to use it. Here are some quick examples:

```ruby
# construct RuleList...

require 'cldr-plurals/ruby_runtime'

ruby_code = rules.to_code(:ruby)
plural_proc = eval(ruby_code)

plural_proc.call('3', CldrPlurals::RubyRuntime)  # => :few
```

```ruby
# construct RuleList...

require 'cldr-plurals/javascript_runtime'

plural_code = rules.to_code(:javascript)

File.open('./plurals-ru.js', 'w+') do |f|
  f.write("
    var runtime = #{CldrPlurals::JavascriptRuntime.source};
    var rules = #{plural_code};
    console.log(rules('3', runtime));
  ")
end
```

Then, running `node ./plurals-ru.js` should print `'few'`.

## Requirements

No external requirements.

## Running Tests

`bundle exec rake` should do the trick. Alternatively you can run `bundle exec rspec`, which does the same thing.

## Authors

* Cameron C. Dutro: http://github.com/camertron
