#! /bin/bash

set -ev

bundle exec rspec

set +v
source ~/.nvm/nvm.sh
nvm install 14.13.0
nvm use 14.13.0
set -v
npm install
npm install -g jasmine-node
jasmine-node spec/
