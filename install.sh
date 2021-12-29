#!/usr/bin/env sh
# Installs this globally.

rm ./*.tgz
npm pack
npm i -g ./*.tgz
