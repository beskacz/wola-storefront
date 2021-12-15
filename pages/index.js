import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home(props) {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
          <div style={{display: 'none'}}>
          {JSON.stringify(props.data, null, 2)}
          </div>
        </p>
      </main>

      <Footer />
    </div>
  )
}

export async function getStaticProps({ params }) {
  const res = await fetch(`https://backoffice.zaproszenia.com/wp-json/wc/v3/products`, {
    headers: {
      'Authorization': 'Basic Y2tfMWUzZDVhNDMyZTI2NTAyODE2ODlhOWI0ZjQwZGQ1ZGJmMzliMTE0ZDpjc184M2JkZDIxMWQ2MmFmNDg1NzE4NGI3YjY3YzM1ZGU4M2I1MDUxYjgw',
    }
  })
  const data = await res.json()

  return {
    props: {
      data,
    },
    revalidate: 60,
  };
}