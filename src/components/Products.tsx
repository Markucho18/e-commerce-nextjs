"use client"
import { ProductProps } from "src/types"
import Product from "../components/Product"

interface Props {
  products: ProductProps[]
}

const Products: React.FC<Props> = ({ products }) => {

  return (
    <ul className="grid grid-cols-4 gap-4 p-2">
      {products.slice(0, 10).map(product => (
        <Product {...product}/>
      ))}
    </ul>
  )
}

export default Products