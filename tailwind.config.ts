import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                night: {
                    base: "#060D1F",
                    dark: "#0D1B3E",
                    deep: "#120A1E",
                },
                accent: {
                    coral: "#F28C81",
                    champagne: "#F7E1D7",
                    pearl: "#FDFCF0",
                    lavender: "#C8B6E2",
                    sage: "#A8BCA1",
                },
            },
            fontFamily: {
                fraunces: ["var(--font-fraunces)", "serif"],
                cormorant: ["var(--font-cormorant)", "serif"],
                nunito: ["var(--font-nunito)", "sans-serif"],
            },
            backgroundImage: {
                "aurora-glow": "radial-gradient(ellipse at top, rgba(200, 182, 226, 0.15), transparent 50%), radial-gradient(ellipse at bottom right, rgba(242, 140, 129, 0.15), transparent 50%)",
            },
        },
    },
    plugins: [],
};
export default config;
