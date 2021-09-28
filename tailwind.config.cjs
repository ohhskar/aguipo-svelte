const defaultTheme = require('tailwindcss/defaultTheme');

const config = {
	mode: 'jit',
	purge: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			container: {
				screens: {
					lg: '768px',
					xl: '768px',
					'2xl': '768px'
				}
			},
			fontFamily: {
				merriweather: ['Merriweather', ...defaultTheme.fontFamily.serif],
				source: ['Source Sans Pro', ...defaultTheme.fontFamily.sans]
			},
			colors: {
				ag: {
					primary: {
						dark: '#703232',
						DEFAULT: '#874545'
					},
					black: '#534444',
					grey: '#7D6666',
					offwhite: '#F1EDED',
					white: '#FFFFFF'
				}
			}
		}
	},
	plugins: []
};

module.exports = config;
