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
    <main className=" w-full flex flex-col gap-10 items-center justify-center transition-padding duration-100">
      //CADA SECTION DEBERIA SER UN COMPONENTE
      <section className="w-[1200px] flex flex-col gap-2">
        <h1 className="text-3xl font-bold">Lo ultimo que viste</h1>
        <div className="flex h-48 border-2 boder-black p-2 overflow-hidden">
          <Products products={productsData}/>
        </div>
      </section>
      <section className="w-[1200px] flex flex-col gap-2">
        <h1 className="text-3xl font-bold">Ultimas Ofertas</h1>
        <div className="flex h-48 border-2 boder-black p-2 overflow-hidden">
          <Products products={productsData}/>
        </div>
      </section>
      <section className="w-[1200px] flex flex-col gap-2">
        <h1 className="text-3xl font-bold">Electronicos</h1>
        <div className="flex h-48 border-2 boder-black p-2 overflow-hidden">
          <Products products={productsData}/>
        </div>
      </section>
    </main>
  )
} 

export default ProductsPage 