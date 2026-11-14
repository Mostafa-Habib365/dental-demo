import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { CLINIC } from './src/clinic.js'

const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')

// Fills index.html from src/clinic.js, so a mockup only needs that one file changed.
function clinicHead() {
  return {
    name: 'clinic-head',
    transformIndexHtml(html) {
      const lang = CLINIC.defaultLang
      const c = CLINIC[lang]
      const site = CLINIC.siteUrl.replace(/\/$/, '')
      // Link previews need full addresses, so these tags only appear once siteUrl is set.
      const shareTags = site
        ? [
            `<link rel="canonical" href="${site}/" />`,
            `<meta property="og:url" content="${site}/" />`,
            `<meta property="og:image" content="${site}/og-image.jpg" />`,
            `<meta property="og:image:width" content="1200" />`,
            `<meta property="og:image:height" content="630" />`,
            `<meta name="twitter:image" content="${site}/og-image.jpg" />`,
          ].join('\n    ')
        : ''
      return html
        .replaceAll('{{lang}}', lang)
        .replaceAll('{{dir}}', lang === 'ar' ? 'rtl' : 'ltr')
        .replaceAll('{{title}}', esc(c.metaTitle))
        .replaceAll('{{description}}', esc(c.metaDescription))
        .replace('<!--share-url-tags-->', shareTags)
    },
  }
}

export default defineConfig({ plugins: [react(), clinicHead()] })
