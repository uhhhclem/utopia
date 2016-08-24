#!/bin/bash
java -jar 'node_modules/google-closure-compiler/compiler.jar' \
  --dependency_mode=STRICT \
  --entry_point='goog:utopia.module' \
  --output_manifest='output.MF' \
  --js='!**_test.js' \
  --js='bower_components/google-closure-library/closure/goog/**.js' \
  --js='js/**.js' \
  --js_output_file='static/js/bundle.js'
