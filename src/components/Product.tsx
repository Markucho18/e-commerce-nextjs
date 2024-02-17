import { ProductProps } from "src/types"

const Product: React.FC<ProductProps> = ({ thumbnail, title, description, price, discountPercentage })  => {

  const getDiscountPrice = (original: number, discount: number) => {
    const discountDecimal = discount / 100
    const discountMount = original * discountDecimal
    const discountPrice = original - discountMount
    return Math.trunc(discountPrice)
  }

  const addDots = (number: number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
  }

  return (
    <li
      className="flex flex-col min-w-[150px] rounded-lg gap-2 overflow-hidden"
      style={{boxShadow: "0px 0px 3px 1px rgba(0,0,0,0.6)"}}
    >
      <header className="h-48 overflow-hidden border-b-2 border-black">
        <img
          className="size-full object-cover object-center"
          src={thumbnail}
        />
      </header>
      <main className="px-4 pb-2">
        <p className="text-center font-bold text-xl w-full truncate mb-2">{title}</p>
        <p className="text-zinc-500 text-sm line-through">${getDiscountPrice(price, discountPercentage)}</p>
        <section className="flex items-center gap-2">
          <p className="font-bold text-2xl">${addDots(price)}</p>
          <p className="text-green-600">{Math.trunc(discountPercentage)}% OFF</p>
        </section>
        <p className="text-zinc-600">{description.slice(0, 60)}...</p>
      </main>
    </li>
  )
}

export default Product