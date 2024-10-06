import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

export default {
    darkMode: ['class'],
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
    	extend: {
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		},
    		colors: {
    			background: 'hsl(var(--background))',
    			foreground: 'hsl(var(--foreground))',
    			card: {
    				DEFAULT: 'hsl(var(--card))',
    				foreground: 'hsl(var(--card-foreground))'
    			},
    			popover: {
    				DEFAULT: 'hsl(var(--popover))',
    				foreground: 'hsl(var(--popover-foreground))'
    			},
    			primary: {
    				DEFAULT: 'hsl(var(--primary))',
    				foreground: 'hsl(var(--primary-foreground))'
    			},
    			secondary: {
    				DEFAULT: 'hsl(var(--secondary))',
    				foreground: 'hsl(var(--secondary-foreground))'
    			},
    			muted: {
    				DEFAULT: 'hsl(var(--muted))',
    				foreground: 'hsl(var(--muted-foreground))'
    			},
    			accent: {
    				DEFAULT: 'hsl(var(--accent))',
    				foreground: 'hsl(var(--accent-foreground))'
    			},
    			destructive: {
    				DEFAULT: 'hsl(var(--destructive))',
    				foreground: 'hsl(var(--destructive-foreground))'
    			},
    			border: 'hsl(var(--border))',
    			input: 'hsl(var(--input))',
    			ring: 'hsl(var(--ring))',
    			chart: {
    				'1': 'hsl(var(--chart-1))',
    				'2': 'hsl(var(--chart-2))',
    				'3': 'hsl(var(--chart-3))',
    				'4': 'hsl(var(--chart-4))',
    				'5': 'hsl(var(--chart-5))'
    			}
    		}
    	}
    },
	plugins: [require("tailwindcss-animate"), require("@lorenzopalaia/tailwind-hero-patterns"),
		plugin( function({ addBase, addComponents, theme }) {
			addBase({
				h1: {
					scrollMargin: theme("scrollMargin.20"), 
					fontSize: theme("fontSize.4xl"),
					fontWeight: theme("fontWeight.extrabold"),
					letterSpacing: theme("letterSpacing.tight"),
					'@media (min-width: 1024px)': {
						fontSize: theme("fontSize.5xl")
					},
				},
				h2: {
					scrollMargin: theme("scrollMargin.20"),
					fontSize: theme("fontSize.3xl"),
					fontWeight: theme("fontWeight.semibold"),
					letterSpacing: theme("letterSpacing.tight"),
					paddingBottom: theme("padding.2"),
					'&:first-child': {
						marginTop: theme("margin.0")
					}
				},
				h3: {
					scrollMargin: theme("scrollMargin.20"),
					fontSize: theme("fontSize.2xl"),
					fontWeight: theme("fontWeight.semibold"),
					letterSpacing: theme("letterSpacing.tight"),
				},
				h4: {
					scrollMargin: theme("scrollMargin.20"),
					fontSize: theme("fontSize.xl"),
					fontWeight: theme("fontWeight.semibold"),
					letterSpacing: theme("letterSpacing.tight"),
				},		
				p: {
					lineHeight: theme("lineHeight.7"),
					'&:not(:first-child)': {
						marginTop: theme("margin.6")
					}
				},			
			});
			addComponents({
				'a:hover[href^="https://"]': {
				  color: theme("textColor.green.500"),
				  transition: theme("transitionProperty.colors"),
				},
				'a:hover[href^="http://"]': {
				  color: theme("textColor.red.500"),
				  transition: theme("transitionProperty.colors"),
				},
				'a:hover[href^="/"]': {
				  color: theme("textColor.blue.500"),
				  transition: theme("transitionProperty.colors"),
				},
				'a:hover[href^="#"]': {
				  color: theme("textColor.purple.500"),
				  transition: theme("transitionProperty.colors"),
				},
			});
		}),
	],
} satisfies Config;
