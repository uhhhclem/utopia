## Environment setup

```
npm install -g bower
bower install angular
bower install angular-mocks
bower install google-closure-library
bower install hammerjs
bower install angular-material

npm install karma --save-dev
npm install -g karma-cli
npm install -g karma-jasmine
npm install -g google-closure-compiler
```

## Closure compiler configuration

Compile with:

```
java -jar 'node_modules/google-closure-compiler/compiler.jar' \
  'bower_components/google-closure-library/closure/goog/base.js' \
  'js/**.js' \
  --js_output_file='static/js/bundle.js'"
```