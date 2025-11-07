import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white border-b shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-extrabold text-[#1E8F4F]">Nama Sekolah</h1>
        <ul className="flex gap-6 text-lg">
          <li>
            <Link data-page="home" className="nav-btn hover:text-[#1E8F4F]" to="/">Home</Link>
          </li>
          <li>
          <Link  data-page="about" className="nav-btn hover:text-[#1E8F4F]" to="/about">About</Link>
          </li>
          <li>
            <Link data-page="prestasi"
              className="nav-btn hover:text-[#1E8F4F]" to="/prestasi">Prestasi</Link>
          </li>
          <li>
            <Link data-page="prestasi"
              className="nav-btn hover:text-[#1E8F4F]" to="/kontak">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
