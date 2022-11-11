// @ts-check
/**
 * @type {import('next-i18next').UserConfig}
 */

module.exports = {
  // https://www.i18next.com/overview/configuration-options#logging
  debug: process.env.NODE_ENV === 'development',
  i18n: {
    // This is the default locale you want to be used when visiting
    // a non-locale prefixed path e.g. `/hello`
    defaultLocale: 'fr',
    // These are all the locales you want to support in
    // your application
    locales: ['fr', 'en', 'es', 'ar', 'de'],
    // This is a list of locale domains and the default locale they
    // should handle (these are only required when setting up domain routing)
    // Note: subdomains must be included in the domain value to be matched e.g. "fr.example.com".
    /*  domains: [
      {
        domain: 'tresorduyemen.fr',
        defaultLocale: 'fr',
      },
      {
        domain: 'tresorduyemen.com/en',
        defaultLocale: 'en',
      },
      {
        domain: 'tresorduyemen.com/es',
        defaultLocale: 'es',
      },
      {
        domain: 'tresorduyemen.com/ar',
        defaultLocale: 'ar',
      },
      {
        domain: 'tresorduyemen.com/de',
        defaultLocale: 'de',
      },
    ], */
  },
  /** To avoid issues when deploying to some paas (vercel...) */
  localePath:
    typeof window === 'undefined'
      ? require('path').resolve('./public/locales')
      : '/locales',

  reloadOnPrerender: process.env.NODE_ENV === 'development',

  /**
   * @link https://github.com/i18next/next-i18next#6-advanced-configuration
   */
  // saveMissing: false,
  // strictMode: true,
  // serializeConfig: false,
  // react: { useSuspense: false }
}
