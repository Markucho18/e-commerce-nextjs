"use client"
import { ProductProps } from "src/types"
import Product from "../components/Product"

interface Props {
  products: ProductProps[]
}

const Products: React.FC<Props> = ({ products }) => {

  return (
    <ul
      className="w-full grid gap-4 p-2 transition-width duration-150"
      style={{gridTemplateColumns: "repeat( auto-fit, minmax(200px, 1fr))"}}
    >
      {products.slice(0, 4).map((product, i) => (
        <Product key={i} {...product}/>
      ))}
    </ul>
  )
}

export default Products