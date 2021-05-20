module.exports = {
    presets: ['next/babel'],
    plugins: [
        [
            require.resolve('babel-plugin-module-resolver'),
            {
                root: ['./'],
                alias: {
                    src: './src',
                },
            },
        ],
    ],
};
