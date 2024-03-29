module.exports = {
	plugins: ['stylelint-scss'],
	extends: ['stylelint-config-recommended-scss'],
	rules: {
		'at-rule-no-unknown': null,
		'scss/at-rule-no-unknown': true,
		'unit-allowed-list': ['em', 'rem', 's', '%', 'px', 'ch', 'fr', 'vw', 'vh', 'deg'],
		indentation: 2,
		'block-closing-brace-empty-line-before': 'never',
		'block-closing-brace-newline-after': 'always',
		'block-closing-brace-newline-before': 'always-multi-line',
		'block-closing-brace-space-before': 'always-single-line',
		'block-opening-brace-newline-after': 'always-multi-line',
		'block-opening-brace-space-after': 'always-single-line',
		'block-opening-brace-space-before': 'always',
		'value-no-vendor-prefix': true,
		'length-zero-no-unit': true,
		'selector-max-empty-lines': 0,
		'selector-no-vendor-prefix': true,
		'declaration-block-single-line-max-declarations': 1,
		'declaration-bang-space-before': 'always',
		'declaration-bang-space-after': 'never',
		'declaration-colon-space-after': 'always-single-line',
		'declaration-colon-space-before': 'never',
		'declaration-block-semicolon-newline-before': 'never-multi-line',
		'declaration-block-trailing-semicolon': 'always'
	}
};
