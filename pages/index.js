import Head from 'next/head'
import Header from '../components/Header'
import Banner from '../components/Banner'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Tukwan</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


        <Header />
  
        <Banner />


        <main className="max-w-7xl mx-auto px-8 xs:px-16">
          <section>
            <div>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio mollitia eius repellat deleniti soluta repellendus quam voluptatum? Perferendis rerum, ut explicabo hic temporibus, dolor placeat ipsa non voluptates incidunt architecto?</p>
            </div>
          </section>
        </main>


      

    

    </div>
  )
}


export async function getStaticProps() {
const exploreData = await fetch ("https://links.papareact.com/pyp").
then (
(res) => res.json()
);

return {
  props:{
  exploreData
   }
 }
 
 

}