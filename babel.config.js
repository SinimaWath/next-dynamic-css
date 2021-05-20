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
    env: {
        server: {
            presets: [
                [
                    'next/babel',
                    {
                        'preset-env': {
                            modules: 'commonjs',
                            targets: {
                                node: 'current',
                            },
                        },
                    },
                ],
            ],
        },
        production: {
            plugins: [
                'lodash',
                [
                    'babel-plugin-graphql-tag',
                    {
                        strip: true,
                    },
                ],
            ],
        },
    },
};
