const path = require('path');
const withPlugins = require('next-compose-plugins');

const nextConfiguration = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['localhost'], // Сюда добавить домен, с которого нужно получать картинки на продакшене
  },
  sassOptions: {
    includePaths: [path.join(__dirname, './src/shared/assets/styles')],
    prependData: `@import "_variables.scss";`
  },
  typescript: {
    // !! WARN !!
    // В production режиме отключает проверку типов и, соответственно, ошибки,
    // связанные с типизацией, чтобы сборка происходила быстрее.
    // !! WARN !!
    // С этой опцией обязательна проверка типов и ошибок в development режиме!
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  eslint: {
    // !! WARN !!
    // В production режиме отключает проверку типов и, соответственно, ошибки,
    // связанные с ESLint/Prettier, чтобы сборка происходила быстрее.
    // !! WARN !!
    // С этой опцией обязательна проверка типов и ошибок в development режиме!
    // !! WARN !!
    ignoreDuringBuilds: true,
  },
};

module.exports = withPlugins([], nextConfiguration);
