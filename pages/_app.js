import { Analytics } from '@vercel/analytics/react';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />  {/* This enables Vercel Analytics */}
    </>
  );
}

export default MyApp;
