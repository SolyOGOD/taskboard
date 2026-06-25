module.exports = [
    {
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "commonjs",
            globals: {
                // Node.js globals
                process: "readonly",
                __dirname: "readonly",
                require: "readonly",
                module: "readonly",
                console: "readonly"
            }
        },
        rules: {
            "no-unused-vars": "warn",
            "no-console": "off"
        }
    }
];
