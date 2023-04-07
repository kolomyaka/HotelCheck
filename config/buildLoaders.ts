import { BuildOptions } from './types/config';
import { buildCssLoader } from './loaders/buildCssLoader';

export function buildLoaders(options: BuildOptions) {

    const fileLoader = {
        test: /(webp|jpe?g|gif)$/i,
        use: [
            'file-loader',
            'webp-loader'
        ]
    };

    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    };

    const styleLoader = buildCssLoader(options.isDev);

    const typeScriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    return [
        typeScriptLoader,
        styleLoader,
        svgLoader,
        fileLoader
    ];
}