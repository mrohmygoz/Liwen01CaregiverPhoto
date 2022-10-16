import Head from 'next/head'
import Image from 'next/image'
import Main from '../components/Main';

export default function Home() {
  return (
    <>
      <Head>
        <title>照見歲月－照顧者生命故事攝影展</title>
        <meta name="description" content="照見歲月" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main />
    </>
  );
}
