import Head from "next/head";
import Header from "@components/Header/Header";
import Footer from "@components/Footer";
import { useCart } from "contexts/CartContext";
import BackOffice from "services/BackOffice";
import Layout from "@components/Layout/Layout";
import ProductGrid from "@components/ProductGrid/ProductGrid";

const cards = [
  {
    name: "Modena",
    image: 'card1.webp',
    price: 6.98 
  },
  {
    name: "Palermo",
    image: 'card2.webp',
    price: 8.98  
  },
  {
    name: "Florencja",
    image: 'card3.jpg',
    price: 7.98  
  },
  {
    name: "Siena",
    image: 'card4.webp',
    price: 7.98  
  },
  {
    name: "Bergamo",
    image: 'card5.webp',
    price: 10.98  
  },
  {
    name: "Ferrara",
    image: 'card6.webp',
    price: 10.98  
  },
  {
    name: "Modena",
    image: 'card1.webp',
    price: 6.98 
  },
]

export default function Home(props) {
  const { totalItems, total, addItem } = useCart();
 
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Header /> */}
      <main>
        <Layout>
          <h1>{props.productSlug}</h1>
        <p className="description">
          totalItems: {totalItems}
          total price: {total}
          Get started by editing <code>pages/index.js</code>
        </p>
       
        </Layout>
        
        {/* <HeroSwiper>
          <HomeCard
            image={couple1.src}
            text={
              <>
                Studio <br />
                Wola
              </>
            }
          />
          <HomeCard image="/zapro2.jpg" 
            text={
              <>
                Zaproszenia <br />
                na ślub
              </>
            } />
          <HomeCard image='/winietki.jpg' text="Winietki" />
        </HeroSwiper> */}

            
       
      </main>

      <Footer />
    </div>
  );
}

export async function getStaticProps({ params }) {
  const [products, categories] = await Promise.all([
    BackOffice.getProducts(),
    BackOffice.getProductCategories(),
  ]);

  return {
    props: {
      products,
      categories,
      productSlug: params.slug
    },
    revalidate: 60,
  };
}

export async function getStaticPaths() {
  // const res = await fetch('https://.../posts')
  // const posts = await res.json()
 
  // Get the paths we want to pre-render based on posts
  const paths = ['/produkt/Palermo'];
  // We'll pre-render only these paths at build time.
  // { fallback: 'blocking' } will server-render pages
  // on-demand if the path doesn't exist.
  return { paths, fallback: 'blocking' }
}
 