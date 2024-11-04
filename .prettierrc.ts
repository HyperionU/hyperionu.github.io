import type { Config } from "prettier"

export default {
    "plugins": ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
    "tailwindConfig": "tailwind.config.ts",
    "tailwindFunctions": ["clsx", "twMerge", "cva", "cn"],
    overrides: [
        {
          files: '*.astro',
          options: {
            parser: 'astro',
          },
        },
    ],
} satisfies Config;