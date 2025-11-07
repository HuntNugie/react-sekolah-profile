import { Link } from "react-router-dom"
export default function NavbarMobile(){
    return  <div
        id="navDrop"
        className="md:hidden border-t bg-white px-6 py-4 space-y-4 text-lg"
      >
        <Link to="/" className="block hover:text-[#1E8F4F]">Home</Link>
        <Link to="/about" className="block hover:text-[#1E8F4F]">
          Tentang Kami
        </Link>
        <Link to="/prestasi" className="block hover:text-[#1E8F4F]">
          Prestasi
        </Link>
        <Link to="/kontak" className="block hover:text-[#1E8F4F]">
          Kontak
        </Link>
      </div>
}