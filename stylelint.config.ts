export default {
  extends: ['stylelint-config-standard-scss', 'stylelint-config-html/svelte'],
	ignoreFiles: ['dist/**/*'],
  rules: {
		'media-feature-range-notation': null
	}
}