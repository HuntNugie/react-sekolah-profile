const AboutPage = () => {
  return (
    <main className="flex-1">
      <section id="about" className="page max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-[#1E8F4F] mb-8">
          Tentang Sekolah
        </h2>
        <p className="leading-relaxed text-gray-700 text-lg mb-10">
          Sekolah kami berdiri sejak tahun 1980 dengan visi mencetak generasi unggul
          dalam ilmu, akhlak, dan kreativitas.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 rounded-lg border-l-4 border-[#1E8F4F] bg-gray-50 shadow-sm">
            <h3 className="font-semibold text-xl mb-2 text-[#1E8F4F]">Visi</h3>
            <p>
              Menjadi lembaga pendidikan yang unggul secara moral dan intelektual.
            </p>
          </div>
          <div className="p-6 rounded-lg border-l-4 border-[#6CB6FF] bg-gray-50 shadow-sm">
            <h3 className="font-semibold text-xl mb-2 text-[#6CB6FF]">Misi</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Mengembangkan keterampilan berpikir kritis.</li>
              <li>Membentuk disiplin dan tanggung jawab.</li>
              <li>Integrasi pembelajaran berbasis teknologi.</li>
            </ul>
          </div>
        </div>
      </section>  
    </main>
  );
};
export default AboutPage