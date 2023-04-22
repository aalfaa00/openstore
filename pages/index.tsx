import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import { Product } from "../type";
import Products from '../components/Products';


interface Props {
  productData: Product
}

const inter = Inter({ subsets: ['latin'] })

export default function Home({productData}:Props) {
  return (
    <>
      
      <main className="bg-lightBlue">
        
        <div className="max-w-contentContainer mx-auto bg-white">
          <Banner />
          <Products productData={productData} />
        </div>
        
      </main>
    </>
  )
}



// ========== SSR data fetching start here ===========
export const getServerSideProps = async() => {
  const productData = await(
    await fetch("http://localhost:3000/api/productdata"),
    await fetch("https://openstore.uz/api/productdata")
  ).json();

  return {
    props: {productData},
  }

}