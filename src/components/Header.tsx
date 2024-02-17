import Link from "next/link"
import { FaAngleDown } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";

const Header: React.FC = () => {
  return (
    <header className="w-full flex justify-center bg-sky-300 py-4 mb-6">
      <div className="flex flex-col w-[800px] gap-2">
        <section className="flex gap-4 items-center">
          <Link className="flex flex-col items-center rounded-lg border-2 border-white px-4 bg-sky-400 hover:bg-sky-500" href="/">
            <p className="text-white font-bold text-lg">NextJS</p>
            <p className="text-white font-bold text-lg">E-Commerce</p>
          </Link>
          <div
            className="grow flex bg-white border-[1px] rounded overflow-hidden divide-x-2"
            style={{boxShadow: "0px 0px 3px 1px rgba(0,0,0,0.6)"}}
          >
            <input
              className="w-full p-2 focus:outline-none "
              type="text"
              placeholder="Search products"
            />
            <button>
              <IoSearch className="h-full w-10 p-2"/>
            </button>
          </div>
        </section>
        <nav className="flex gap-4 justify-center">
          <div className="relative showOptions">
            <Link className="flex items-center hover:text-gray-700" href="/">
              <p>Categorias</p>
              <FaAngleDown />
            </Link>
            <ul className="flex-col absolute mt-4 right-0 bg-zinc-700 text-white rounded-lg overflow-hidden options">
              <li className="py-3 px-6 hover:bg-zinc-800">
                <Link href="/">Computadora</Link>
              </li>
              <li className="py-3 px-6 hover:bg-zinc-800">
                <Link href="/">Computadora</Link>
              </li>
              <li className="py-3 px-6 hover:bg-zinc-800">
                <Link href="/">Computadora</Link>
              </li> 
            </ul>
          </div>
          <Link className=" hover:text-gray-700" href="/">Ofertas</Link>
          <Link className=" hover:text-gray-700" href="/">Historial</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header