import React from "react";
import Image from "next/image";

export default function Page() {
  return (
    <main className="w-full flex flex-col items-center py-24 px-6 gap-32 mt-24">
      <section className="text-center max-w-3xl mx-auto flex flex-col items-center gap-6">
        <div className="flex items-center gap-4 mb-2">
          <div className="w-16 h-16 bg-[#FFAC33] rounded-xl flex items-center justify-center shadow-md relative overflow-hidden">
            <Image
              src="/Bank.png"
              alt="Logo 1"
              width={32}
              height={32}
              className="object-contain brightness-0 invert"
            />
          </div>

          <div className="h-0 w-12 border-t-2 border-dashed border-gray-300" />

          <div className="w-24 h-24 bg-[#FFAC33] rounded-xl flex items-center justify-center shadow-lg relative overflow-hidden">
            <Image
              src="/Footerlogo.png"
              alt="Logo 2"
              width={64}
              height={64}
              className="object-contain brightness-0 invert"
            />
          </div>

          <div className="h-0 w-12 border-t-2 border-dashed border-gray-300" />

          <div className="w-16 h-16 bg-[#FFAC33] rounded-xl flex items-center justify-center shadow-md relative overflow-hidden">
            <Image
              src="/RowsPlusTop.png"
              alt="Logo 3"
              width={32}
              height={32}
              className="object-contain brightness-0 invert"
            />
          </div>
        </div>

        <h1 className="text-[48px] font-bold text-[#1E293B] leading-[110%] tracking-tight">
          Eksplorasi Kedalaman <br /> Ekosistem Monity.
        </h1>
        <p className="text-gray-500 text-lg font-medium max-w-2xl">
          Melihat lebih dekat bagaimana setiap komponen dalam Monity bekerja
          secara harmonis untuk menjaga dan menumbuhkan aset pribadi Anda.
        </p>
      </section>

      <section className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="flex flex-col gap-6">
          <h2 className="text-[40px] font-bold text-[#1E293B] leading-[110%]">
            Automasi Finansial Tanpa Batas
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            Lupakan input data manual yang membosankan. Monity mengintegrasikan
            alur kerja otomatis yang menyinkronkan data perbankan secara aman
            dan instan ke dalam dashboard pribadi Anda tanpa jeda.
          </p>
        </div>
        <div className="bg-[#F9F6F2] rounded-[40px] aspect-[4/3] relative overflow-hidden flex items-center justify-center p-12">
          <Image
            src="/SolusiImage1.png"
            alt=""
            fill
            className="object-contain p-10"
          />
        </div>
      </section>

      <section className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="order-2 md:order-1 bg-[#F9F6F2] rounded-[40px] aspect-[4/3] relative overflow-hidden flex items-center justify-center p-12">
          <Image
            src="/SolusiImage2.png"
            alt=""
            fill
            className="object-contain p-10"
          />
        </div>
        <div className="order-1 md:order-2 flex flex-col gap-6">
          <h2 className="text-[40px] font-bold text-[#1E293B] leading-[110%]">
            Visualisasi Data Paling Intuitif
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            Kami mengubah angka-angka rumit menjadi narasi visual yang mudah
            dipahami. Grafik dinamis kami membantu Anda mengidentifikasi pola
            pengeluaran untuk mengambil keputusan finansial yang lebih cerdas
            setiap hari.
          </p>
        </div>
      </section>

      <section className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="flex flex-col gap-6">
          <h2 className="text-[40px] font-bold text-[#1E293B] leading-[110%]">
            Proyeksi Masa Depan Akurat
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            Bukan sekadar mencatat sejarah, Monity membantu Anda memprediksi
            kondisi finansial di masa depan. Berdasarkan tren saat ini dan
            rencana tabungan Anda, kami memberikan estimasi aset yang presisi
            untuk target jangka panjang.
          </p>
        </div>
        <div className="bg-[#F9F6F2] rounded-[40px] aspect-[4/3] relative overflow-hidden flex items-center justify-center p-12">
          <Image
            src="/SolusiImage3.png"
            alt=""
            fill
            className="object-contain p-10"
          />
        </div>
      </section>

      <section className="w-full max-w-6xl pt-20 border-t border-gray-100">
        <div className="text-center mb-16 ">
          <h2 className="text-[32px] font-bold text-[#1E293B]">
            Prinsip Utama Monity
          </h2>
          <p className="text-gray-500 mt-2">
            Landasan kami dalam membangun teknologi finansial yang terpercaya
            bagi Anda.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            {
              id: "1.",
              title: "Keamanan Mutlak",
              desc: "Enkripsi standar bank untuk menjaga kerahasiaan data finansial Anda.",
            },
            {
              id: "2.",
              title: "Transparansi Penuh",
              desc: "Akses informasi real-time tanpa biaya tersembunyi yang merepotkan.",
            },
            {
              id: "3.",
              title: "Inovasi Inklusif",
              desc: "Teknologi yang dirancang untuk segala segmen, dari pemula hingga ahli finansial.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-4  bg-white rounded-2xl px-6 py-3"
            >
              <span className="text-[#FFAC33] font-bold text-lg">
                {item.id}
              </span>
              <h3 className="text-xl font-bold text-[#1E293B]">{item.title}</h3>
              <p className="text-gray-500 leading-relaxed text-sm font-medium">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
