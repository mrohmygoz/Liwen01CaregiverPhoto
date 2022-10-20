import Head from 'next/head';
import '../styles/globals.css';
import Navbar from '../components/Navbar';

function MyApp({ Component, pageProps }) {
  return (
    <div className='relative'>
      <Head>
        <title>照見歲月－照顧者生命故事攝影展</title>
        <meta name="description" content="照見歲月" />
        <link rel="icon" href="/my.ico" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp
