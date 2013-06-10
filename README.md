angular-jscompiler
==================

Runinng this
```
$ java -jar compiler.jar --js angular.js app.js --jscomp_warning checkTypes
```

Results in outputing something like this:
```
angular.js:57: ERROR - Parse error. identifier is a reserved word
    msie              = int((/msie (\d+)/.exec(lowercase(navigator.userAgent)) || [])[1]),
                        ^

angular.js:57: ERROR - Parse error. illegal character
    msie              = int((/msie (\d+)/.exec(lowercase(navigator.userAgent)) || [])[1]),
                                    ^

angular.js:57: ERROR - Parse error. syntax error
    msie              = int((/msie (\d+)/.exec(lowercase(navigator.userAgent)) || [])[1]),
                                       ^

angular.js:58: ERROR - Parse error. syntax error
    jqLite,           // delay binding since jQuery could be loaded after us.
          ^

angular.js:59: ERROR - Parse error. syntax error
    jQuery,           // delay binding
          ^

angular.js:60: ERROR - Parse error. syntax error
    slice             = [].slice,
                      ^

angular.js:61: ERROR - Parse error. syntax error
    push              = [].push,
                      ^
```

