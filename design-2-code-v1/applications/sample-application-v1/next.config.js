/** @type {import('next').NextConfig} */
const path = require('path');

// Get the absolute path to the workspace root
const rootDir = path.resolve(__dirname, '../../..');
const designSystemPath = path.join(rootDir, 'design-2-code-v1/packages/design-system-v1');

const nextConfig = {
  reactStrictMode: true,
  transpilePackages: [
    '../../packages/atoms-v1',
    '../../packages/molecules-v1',
    '../../packages/organisms-v1',
    '../../packages/layouts-v1',
    '../../packages/design-system-v1'  
  ],
  // Add empty turbopack configuration to work with Next.js 16
  turbopack: {},
  sassOptions: {
    includePaths: [
      designSystemPath,
      path.join(designSystemPath, 'src', 'scss')
    ]
  },
  webpack: (config) => {
    // Configure SCSS loader with absolute paths
    const sassRule = config.module.rules.find(rule => 
      rule.test && rule.test.toString().includes('scss|sass')
    );
    
    if (sassRule && Array.isArray(sassRule.oneOf)) {
      sassRule.oneOf.forEach(rule => {
        if (rule.use && Array.isArray(rule.use)) {
          rule.use.forEach(loader => {
            if (loader.loader && loader.loader.includes('sass-loader')) {
              if (!loader.options) loader.options = {};
              if (!loader.options.sassOptions) loader.options.sassOptions = {};
              if (!loader.options.sassOptions.includePaths) loader.options.sassOptions.includePaths = [];
              
              loader.options.sassOptions.includePaths.push(
                designSystemPath,
                path.join(designSystemPath, 'src', 'scss')
              );
            }
          });
        }
      });
    }

    // Ensure all SCSS files can be loaded from design-system-v1
    config.module.rules.push({
      test: /\.scss$/,
      include: [/packages\/design-system-v1/],
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'sass-loader',
          options: {
            sassOptions: {
              includePaths: [
                designSystemPath,
                path.join(designSystemPath, 'src', 'scss')
              ],
            }
          }
        }
      ]
    });

    // Add resolve alias for design-system
    config.resolve.alias['@design-system'] = designSystemPath;

    return config;
  }
};

module.exports = nextConfig;
