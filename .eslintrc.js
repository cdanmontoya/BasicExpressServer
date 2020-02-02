module.exports={
    "env": {
        "commonjs": true,
        "es6": true,
        "node": true,
        "jest/globals": true
    },
    "plugins": [
        "security",
        "jest"
    ],
    "extends" : [
        "airbnb-base",
        "plugin:security/recommended"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "rules": {
        "no-console": "off",
        "linebreak-style": "off",
        "jest/no-disabled-tests": "warn",
        "jest/no-focused-tests": "error",
        "jest/no-identical-title": "error",
        "jest/prefer-to-have-length": "warn",
        "jest/valid-expect": "error"
    }
   }