module.exports = {
    printWidth: 1000,
    tabWidth: 4,

    plugins: ['prettier-plugin-astro', "prettier-plugin-tailwindcss"],
    overrides: [
        {
            files: "*.astro",
            options: {
                parser: "astro",
            },
        },
    ],
    tailwindConfig: "./tailwind.config.cjs",
};
