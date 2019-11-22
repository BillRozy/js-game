module.exports = {
    "parser":  '@typescript-eslint/parser',  // Specifies the ESLint parser
    "extends":  [
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',  // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    ],
    "env": {
        "browser": true,
        "es6": true
    },
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
    },
    "settings": {
        "import/resolver": "webpack",
        "react":  {
            "version":  'detect',  // Tells eslint-plugin-react to automatically detect the version of React to use
        },
    }
};