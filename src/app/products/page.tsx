import { useEffect, useState } from "react"
import Products from "src/components/Products"
import { ProductProps } from "src/types"

const getProducts = async () => {
  const res = await fetch("http://localhost:3000/api/products")
  const data = await res.json()
  return data as ProductProps[]
}

const ProductsPage = async () => {

  const productsData = await getProducts()
  
  return (
    <main className=" sm:px-0 md:px-20 lg:px-40 xl:px-60 2xl:px-80 transition-padding duration-100">
      <Products products={productsData}/>
    </main>
  )
} 

export default ProductsPage 