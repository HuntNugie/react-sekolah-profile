import LinkNavbar from './partials/LinkNavbar';
const Navbar = () => {
  return (
    <nav className="bg-white border-b shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-extrabold text-[#1E8F4F]">Nama Sekolah</h1>
        <ul className="flex gap-6 text-lg">
          <li>
            <LinkNavbar data="home" name="Home" nav="/"/>
          </li>
          <li>
            <LinkNavbar data="about" name="tentang kami" nav="/about" />

          </li>
          <li>
            <LinkNavbar data="prestasi" name="Prestasi" nav="/prestasi" />
          </li>
          <li>
            <LinkNavbar data="kontak" name="kontak" nav="/kontak" />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
