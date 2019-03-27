/**
 * webpack 설정파일..
 * webpack => Module bundler(간단히 여러개의 파일을 하나로 묶어주는 Library)
 * 장점
 * - network 병목현상 해결
 * - 모듈단위 개발 => 효율상승, 스코프 신경 안씀..
 * 
 * 
 * loader => 스타일시트, 이미지 등을  webpack이 이해할 수 있는 js모듈로 변경해주는 역할
 */

const path = require("path");
const autoprefixer = require("autoprefixer");
const ExtractCSS = require("extract-text-webpack-plugin");

const MODE = process.env.WEBPACK_ENV;

//Entry =>  종속성 그래프의 시작점
const ENTRY_FILE = path.resolve(__dirname, "assets", "js", "main.js");

//Output => 생성된 번들 저장위치
const OUTPUT_DIR = path.join(__dirname, "static");
const config = {
    entry: ["@babel/polyfill", ENTRY_FILE],
    mode: MODE,
    module: {
        rules: [{
                test: /\.(js)$/,
                use: [{
                    loader: "babel-loader"
                }]
            },
            {
                test: /\.(scss)$/,
                use: ExtractCSS.extract([{
                        loader: "css-loader"
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            plugins() {
                                return [autoprefixer({ browsers: "cover 99.5%" })];
                            }
                        }
                    },
                    {
                        loader: "sass-loader"
                    }
                ])
            }
        ]
    },
    output: {
        path: OUTPUT_DIR,
        filename: "[name].js"
    },
    plugins: [new ExtractCSS("styles.css")]
};

module.exports = config;