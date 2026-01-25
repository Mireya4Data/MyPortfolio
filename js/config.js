tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "primary": "#008000",
                "background-light": "#f6f6f8",
                "background-dark": "#121212",
                "background-base": "#121212",
                "background-card": "#1E1E1E",
                "card-dark": "#262626",
                "accent-text": "#22c55e",
                "charcoal": "#1E1E1E",
                "charcoal-card": "#262626",
                "charcoal-input": "#18181b",
                "border-color": "#333333",
            },
            fontFamily: {
                "space": ["Space Grotesk", "sans-serif"],
                "inter": ["Inter", "sans-serif"],
                "sans": ["Noto Sans", "sans-serif"],
                // Keeping 'display' mapping to Space Grotesk for backward compatibility where possible, 
                // but we will migrate contact/ourwork to 'inter' explicitly.
                "display": ["Space Grotesk", "sans-serif"] 
            },
            borderRadius: {
                "DEFAULT": "0.25rem",
                "lg": "0.5rem",
                "xl": "0.75rem",
                "full": "9999px"
            },
        },
    },
}
