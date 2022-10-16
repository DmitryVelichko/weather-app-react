import Head from 'next/head';
import Header from '../components/Header';
import Banner from '../components/Banner';
import SmallCard from '../components/SmallCard';
import MediumCard from '../components/MediumCard'
import LargeCard from '../components/LargeCard';

const Home = ({ exploreData, cardsData }) => {
  return (
    <div className=''>
      <Head>
        <title>Airbnb</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />
      <Banner />

      <main className='max-w-7xl mx-auto px-8 sm:px-16'>
        <section className='pt-6'>
          <h2 className='text-4xl font-semibold pb-5'>Explore Nearby</h2>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {exploreData?.map(({ img, distance, location }) => (
              <SmallCard
                key={img}
                img={img}
                location={location}
                distance={distance}
              />
            ))}
          </div>
        </section>

        <section>
        <h2 className='text-4xl font-semibold py-8'>Live Anywhere</h2>

          <div className='gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:gap-10 xl:grid-cols-3'>
          {cardsData?.map(({img, title}) => (
             <MediumCard key={img} img={img} title={title}/>
          ))
          }
           </div>
        </section>

        <LargeCard 
        title="The Greatest Outdoors"
        description="Wishlists curated by Airbnb"
        buttonText="Get Inspired" />
      </main>
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  const exploreData = await fetch('https://www.jsonkeeper.com/b/4G1G').then(
    (res) => res.json()
  );

  const cardsData = await fetch('https://www.jsonkeeper.com/b/VHHT').then(
    (res) => res.json()
  );

  return {
    props: {
      exploreData,
      cardsData
    },
  };
}
