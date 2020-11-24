#! /bin/bash

set -ev

bundle exec rspec

set +v
source ~/.nvm/nvm.sh
set -v
nvm install 14.13.0
nvm use 14.13.0
npm install
jasmine-node spec/
