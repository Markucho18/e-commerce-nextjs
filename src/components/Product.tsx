import { ProductProps } from "src/types"

const Product: React.FC<ProductProps> = ({ thumbnail, title, description })  => {
  return (
    <li className="flex flex-col min-w-[150px] rounded-lg border-2 border-black p-2 gap-2">
      <img
        className="h-1/3 w-full rounded-lg object-cover object-center outline-1 outline-black"
        src={thumbnail}
        alt="" 
      />
      <p>{title}</p>
      <p>{description.slice(0, 50)}...</p>
    </li>
  )
}

export default Product