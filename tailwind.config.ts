import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			colors: {
				// light layout
				commonText: '#929292',
				red: '#E81948',
				dark28: '#1C1C1C',
				lightGray247: '#F7F7F7',
				lightGray226: '#E2E2E2',
				headerBg: 'rgba(255, 255, 255, 0.75)',
			},
			animation: {
				wiggle: 'wiggle 1s ease-in-out infinite',
				opacity1: 'opacity 1s ease-in-out infinite',
				opacity2: 'opacity 2s ease-in-out infinite',
				opacity3: 'opacity 3s ease-in-out infinite',
			},
			keyframes: {
				wiggle: {
					'0%, 100%': { transform: 'rotate(-96deg)' },
					'50%': { transform: 'rotate(-86deg)' },
				},
				opacity: {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.5' },
				},
			},
		},
	},
	plugins: [],
};
export default config;
