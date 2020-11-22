#! /bin/bash

set -ev

bundle exec rspec

source ~/.nvm/nvm.sh
nvm install 14.13.0
nvm use 14.13.0
npm install -g jasmine-node
jasmine-node spec/
