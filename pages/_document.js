import Document, { Html, Head, Main, NextScript } from "next/document";

class IJNDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href="/logo_white.svg" />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          />
          <link rel="stylesheet" type="text/css" href="/nprogress.css" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Athiti:300,400,500,700"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=poppins:300,400,600,700"
          />
          <meta
            property="og:title"
            content="TheIceJI - Jirayu Ninlapun Official Website"
          />
          <meta
            property="og:description"
            content="I'm Jirayu Ninlapun, studying Cinematic Art at Bangkok University. Experience: 7 years in Graphics Design, 5 years in Video and Motion, and 2 years in Web Developer. "
          />
          <meta
            property="og:image"
            content="/cover.jpg"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default IJNDocument;
