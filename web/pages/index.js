
import Head from 'next/head'
import Container from '../components/Container';
import  Layout from '../components/Layout';


export default function Home() {
  
  return (
          <Layout>
                <Head>
                    <title>Home Page</title>
                </Head>
                <Container>
                    <h1>Home Page</h1>
                </Container>
            </Layout>
  )
}

