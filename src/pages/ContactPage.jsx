const ContactPage = () => {
  return (
    <main className="flex-1">
      <section id="kontak" className="page max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-[#1E8F4F] mb-8">Hubungi Kami</h2>
        <form className="space-y-4 bg-white shadow-lg p-8 rounded-lg max-w-lg">
          <input
            type="text"
            placeholder="Nama"
            className="w-full p-3 border rounded"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border rounded"
          />
          <textarea
            placeholder="Pesan"
            className="w-full p-3 border rounded h-32"
            defaultValue={''}
          />
          <button className="bg-[#1E8F4F] hover:bg-[#16693b] text-white px-6 py-2 rounded font-semibold">
            Kirim
          </button>
        </form>
      </section>
    </main>
  );
};

export default ContactPage