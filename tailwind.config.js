/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				bgwindow: '#202733',
				bgcard: '#313A48',
				dicegreen: '#53FFAA',
				textcyan: '#CEE3E9',
			},
		},
	},
	plugins: [],
};
