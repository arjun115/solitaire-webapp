import Head from 'next/head'
import Layout from '../layout/Layout'
import '../scss/index.scss'
// import 'bootstrap/dist/js/bootstrap.bundle'

let config = {
    appName: ''
}

let App = ({ Component, pageProps }) => {
    let { title, description, keywords } = pageProps
    
    return (
        <>
          <Head>
            
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#000000" />
            <meta name="robots" content="index, follow" />
            <link rel="icon" href="/icons/favicon.ico" />
            
            <link rel="preconnect" href="https://googleads.g.doubleclick.net" />
            <link rel="preconnect" href="https://adservice.google.mk" />
            <link rel="preconnect" href="https://adservice.google.com" />
            <link rel="preconnect" href="http://ajax.googleapis.com" />
            <link rel="preconnect" href="http://cookie-script.com" />

            <script data-ad-client="ca-pub-8160014187918469" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
            <script async crossOrigin="anonymous" src="//cookie-script.com/s/1585fc872fa92d28180e2a6e9ead9e0b.js"></script>

            <link rel="apple-touch-icon" sizes="57x57" href="/icons/apple-icon-57x57.png" />
            <link rel="apple-touch-icon" sizes="60x60" href="/icons/apple-icon-60x60.png" />
            <link rel="apple-touch-icon" sizes="72x72" href="/icons/apple-icon-72x72.png" />
            <link rel="apple-touch-icon" sizes="76x76" href="/icons/apple-icon-76x76.png" />
            <link rel="apple-touch-icon" sizes="114x114" href="/icons/apple-icon-114x114.png" />
            <link rel="apple-touch-icon" sizes="120x120" href="/icons/apple-icon-120x120.png" />
            <link rel="apple-touch-icon" sizes="144x144" href="/icons/apple-icon-144x144.png" />
            <link rel="apple-touch-icon" sizes="152x152" href="/icons/apple-icon-152x152.png" />
            <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-icon-180x180.png" />
            <link rel="icon" type="image/png" sizes="192x192"  href="/icons/android-icon-192x192.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="96x96" href="/icons/favicon-96x96.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
            
            <link rel="manifest" href="/manifest.json" />
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            
            <title>{title}</title>
          </Head>
          <Layout pageName={Component.name.toLowerCase()}>
            <Component {...pageProps} />
          </Layout>
        </>
      )
}

export default App