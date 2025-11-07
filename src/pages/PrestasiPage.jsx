const PrestasiPage = () => {
  return (
    <main className="flex-1">

      <section
        id="prestasi"
        className="page max-w-6xl mx-auto px-6 py-16"
      >
        <h2 className="text-3xl font-bold text-[#1E8F4F] mb-10">
          Prestasi Sekolah
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white shadow-md rounded-lg p-5 border-t-4 border-[#1E8F4F]">
            Juara 1 Lomba Sains Nasional
          </div>
          <div className="bg-white shadow-md rounded-lg p-5 border-t-4 border-[#6CB6FF]">
            Juara 2 Basket Antar Kabupaten
          </div>
          <div className="bg-white shadow-md rounded-lg p-5 border-t-4 border-[#1E8F4F]">
            Finalis Olimpiade Matematika
          </div>
        </div>
      </section>

    </main>
  );
};

export default PrestasiPage;
