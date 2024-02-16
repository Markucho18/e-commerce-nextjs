import Link from "next/link";
import Products from "src/components/Products"
import { ProductProps } from "../types"

const getProducts = async () => {
  const res = await fetch('/api/products')
  return res
}

const products = getProducts()

export default function Home() {

  return (
    <main >
      <nav>
        <ul>
          <li>
            <Link href="/about">
              About
            </Link>
          </li>
          <li>
            <Link href="/products">
              Products
            </Link>
          </li>
          <li>
            <Link href="/users/3">
              USER 3
            </Link>
          </li>
        </ul>
      </nav>
    </main>
  );
}
