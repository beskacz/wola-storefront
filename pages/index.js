import Head from "next/head";
import Header from "@components/Header/Header";
import Footer from "@components/Footer";
import { useCart } from "contexts/CartContext";
import BackOffice from "services/BackOffice";
import cardImg from "./card.jpg";
import couple1 from "./couple1.jpg";
import { HomeCard } from "@components/HomeCard/HomeCard";
import { HeroSwiper } from "@components/HeroSwiper/HeroSwiper";
import HomeHero from "@components/HomeHero";
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
  const onAdd = (prod) => {
    addItem(prod.id, prod);
  };
  console.log(cardImg);
  console.log({ props });
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Header /> */}
      <main>
        <Layout><HomeHero></HomeHero>
       <ProductGrid products={cards} description={(
        <><span>Od eterycznej elegancji ponadczasowych klasyków</span> po
        czarujący urok współczesnych wzorów, nasza gama zaproszeń ślubnych
        jest celebracją miłości w każdej formie. Każde zaproszenie jest
        starannie wykonane z najwyższą dbałością o detale,
        odzwierciedlając piękno i radość otaczającą Twoją podróż ku
        wiecznemu szczęściu.</>
       )}></ProductGrid>
       <ProductGrid products={cards} title="Akcesoria ślubne" description={(
        <><span>Czy organizujesz ślub w stylu średniowiecznym czy mityczny bankiet?</span>Nasza sekcja akcesoriów ślubnych to nie tylko praktyczne elementy aranżacji, ale również piękne akcenty, które dodadzą magii i wyrafinowanego stylu do Twojego przyjęcia. Każdy element jest starannie zaprojektowany, aby harmonizować z Twoim wybranym motywem, podkreślając charakter Twojego wesela i dodając mu niepowtarzalnego uroku.

        </>
       )}></ProductGrid>
        <p className="description">
          totalItems: {totalItems}
          total price: {total}
          Get started by editing <code>pages/index.js</code>
        </p>
        {props.products.map((product) => {
          return <div>
            <p>{product.name}</p>
            <p>{product.price}</p>
            <p dangerouslySetInnerHTML={{__html: product.price_html}}></p>
            <button onClick={() => onAdd(product)}>Add to cart</button>
          </div>
          })}
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
    },
    revalidate: 60,
  };
}
