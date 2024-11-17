/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	colors: {
  		main_text: {
  			dark: '#2D3436',
  			light: '#E5E9F0'
  		},
  		secondary_text: {
  			dark: '#A0AEC0',
  			light: '#636E72'
  		},
  		tertiary_text: {
  			dark: '#718096',
  			light: '#B2BEC3'
  		},
  		background: {
  			dark: '#1A1E23',
  			light: '#F7F9FC'
  		},
  		foreground: {
  			dark: '#232931',
  			light: '#FFFFFF'
  		},
  		border: {
  			dark: '#2D3748',
  			light: '#E2E8F0'
  		},
  		divider: {
  			dark: '#2D3748',
  			light: '#EDF2F7'
  		},
  		link: {
  			dark: '#FF9F7D',
  			light: '#E17055'
  		},
  		link_hover: {
  			dark: '#FFB299',
  			light: '#FF8C6B'
  		},
  		button: {
  			dark: '#FF9F7D',
  			light: '#E17055'
  		},
  		button_hover: {
  			dark: '#FFB299',
  			light: '#FF8C6B'
  		},
  		button_disabled: {
  			dark: '#4A5568',
  			light: '#CBD5E0'
  		},
  		input_bg: {
  			dark: '#2D3748',
  			light: '#FFFFFF'
  		},
  		input_border: {
  			dark: '#4A5568',
  			light: '#CBD5E0'
  		},
  		input_focus: {
  			dark: '#FF9F7D',
  			light: '#E17055'
  		},
  		input_placeholder: {
  			dark: '#718096',
  			light: '#A0AEC0'
  		},
  		success: {
  			dark: '#2ECC71',
  			light: '#26DE81'
  		},
  		error: {
  			dark: '#E74C3C',
  			light: '#EB4D4B'
  		},
  		warning: {
  			dark: '#F1C40F',
  			light: '#FED330'
  		},
  		info: {
  			dark: '#3498DB',
  			light: '#45AAF2'
  		},
  		tag_bg: {
  			dark: '#2D3748',
  			light: '#F1F5F9'
  		},
  		tag_text: {
  			dark: '#A0AEC0',
  			light: '#64748B'
  		}
  	},
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
  plugins: [require("tailwindcss-animate")],
};
