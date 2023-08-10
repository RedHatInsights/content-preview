const path = require('path');
const glob = require('glob');

module.exports = {
    presets: [
        '@babel/env',
        '@babel/react'
    ],
    plugins: [
        '@babel/plugin-transform-runtime',
        '@babel/plugin-syntax-dynamic-import',
        '@babel/plugin-proposal-object-rest-spread',
        [
            'transform-imports',
            {
                '@patternfly/react-core': {
                    transform: (importName) => {
                        let res;
                        const files = glob.sync(
                            path.resolve(
                                __dirname,
                                `./node_modules/@patternfly/react-core/dist/js/**/${importName}.js`
                            )
                        );
                        if (files.length > 0) {
                            res = files[0];
                        } else {
                            throw `File with importName ${importName} does not exist`;
                        }

                        res = res.replace(path.resolve(__dirname, './node_modules/'), '');
                        res = res.replace(/^\//, '');
                        return res;
                    },
                    preventFullImport: false,
                    skipDefaultConversion: true
                }
            },
            'react-core'
        ]
    ]
};
