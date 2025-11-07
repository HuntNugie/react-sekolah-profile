const HomePage = () => {
  return (
    <main className="flex-1">
  
      <section id="home" className="page">
        <div className="bg-[#A7E7AF] py-20">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-4xl font-extrabold mb-4 text-[#1E8F4F]">
                Selamat Datang
              </h2>
              <p className="text-lg leading-relaxed text-gray-700">
                Kami membangun lingkungan belajar yang inspiratif, mendukung
                perkembangan akademik serta karakter setiap siswa.
              </p>
            </div>
            <img
              src="https://images.unsplash.com/photo-1577896851231-70ef18881754?w=700"
              className="rounded-lg shadow-lg"
              alt="Sekolah"
            />
          </div>
        </div>
      </section>
   
    </main>
  );
};

export default HomePage
