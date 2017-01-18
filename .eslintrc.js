module.exports = {
    "extends": "airbnb",
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
    "rules": {
	    'func-names': 0,
	    'prefer-arrow-callback': 0,
	    'new-cap': 0,
	    'camelcase': 0,
	    'no-constant-condition': 0,
	    'no-param-reassign': 0,
	    'space-before-function-paren': 0,
	    'import/no-unresolved': 0,
	    'import/no-extraneous-dependencies': 0,
	    'comma-dangle': 0,
	    'no-underscore-dangle': 0,
	    "react/jsx-filename-extension": [0, { "extensions": [".js"] }]
	},
	"env": {
	    "es6": true
	  }
};