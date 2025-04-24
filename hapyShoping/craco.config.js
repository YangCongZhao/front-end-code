const path = require('path');

module.exports = {
    webpack: {
        alias: {
            '@': path.resolve(__dirname, 'src') // 可选：配置路径别名
        }
    },
    plugins: [
    ],
    style: {
        postcss: {
            mode: "extends",
            loaderOptions: {
                postcssOptions: {
                    ident: "postcss",
                    plugins: [
                        ["postcss-pxtorem", {
                            rootValue: 37.5, // 375px 设计稿基准值（750px 设计稿设为 75）
                            propList: ["*"], // 转换所有属性的 px 值
                            exclude: /node_modules/ // 排除第三方库
                        }]
                    ]
                }
            }
        }
    },
    devServer: {
        client: {
            overlay: false // 可选：禁用编译错误覆盖层
        }
    }
};