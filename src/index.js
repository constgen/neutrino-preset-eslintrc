'use strict'

const eslint = require('@neutrinojs/eslint')

module.exports = function(neutrino){
	neutrino.use(eslint)
	neutrino.config
		.module.rule('lint')
			.use('eslint')
				.tap(function(options){
					options.useEslintrc = true
					options.parserOptions = {}
					return options
				})
}