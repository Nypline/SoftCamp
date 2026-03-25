import React from "react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="w-full flex flex-col items-center py-24 px-6 gap-32 mt-24">
      <section className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="flex flex-col gap-6">
          <h1 className="text-[55px] font-bold text-[#1E293B] leading-[110%] tracking-tight">
            Membangun Fondasi Finansial yang Kokoh
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed font-medium">
            Monity hadir untuk mendefinisikan ulang cara Anda melihat,
            mengelola, dan menumbuhkan aset setiap hari.
          </p>
        </div>
        <div className="relative aspect-video rounded-[12px] overflow-hidden shadow-2xl border-8 border-white">
          <Image
            src="/AboutPhotos.jpg"
            alt="Team Meeting"
            fill
            className="object-cover"
          />
        </div>
      </section>

      <section className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { label: "Pengguna Aktif", value: "10K+" },
          { label: "Bank & E-Wallet", value: "25+" },
          { label: "Pengguna Puas", value: "98%" },
        ].map((stat, i) => (
          <div
            key={i}
            className="bg-white p-10 rounded-[32px] border border-gray-100 shadow-sm flex flex-col items-center justify-center gap-2"
          >
            <span className="text-[40px] font-bold text-[#1E293B]">
              {stat.value}
            </span>
            <span className="text-gray-400 font-medium">{stat.label}</span>
          </div>
        ))}
      </section>

      <section className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="bg-[#F9F6F2] rounded-[40px] aspect-square relative flex items-center justify-center p-12">
          <Image
            src="/AboutPhotos2.png"
            alt=""
            fill
            className="object-cover p-16"
          />
        </div>
        <div className="flex flex-col gap-6">
          <h2 className="text-[40px] font-bold text-[#1E293B] leading-[110%]">
            Lahir dari Kebutuhan akan Kejelasan
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            Kami percaya bahwa setiap rupiah memiliki cerita. Monity diciptakan
            untuk menghilangkan kebingungan finansial dan memberikan
            transparansi penuh atas setiap keputusan yang Anda ambil demi masa
            depan.
          </p>
        </div>
      </section>

      <section className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="order-2 md:order-1 flex flex-col gap-6">
          <h2 className="text-[40px] font-bold text-[#1E293B] leading-[110%]">
            Masa Depan Finansial Mandiri
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            Kami berdedikasi penuh untuk membangun sebuah ekosistem digital yang
            memungkinkan setiap individu memiliki kendali mutlak atas
            kesejahteraan mereka. Fokus kami adalah menghilangkan kecemasan
            finansial melalui transparansi data yang mendalam.
          </p>
        </div>
        <div className="order-1 md:order-2 bg-[#F9F6F2] rounded-[40px] aspect-square relative flex items-center justify-center p-12">
          <Image
            src="/AboutPhotos3.png"
            alt=""
            fill
            className="object-cover p-16"
          />
        </div>
      </section>

      <section className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="bg-[#F9F6F2] rounded-[40px] aspect-square relative flex items-center justify-center p-12">
          <Image
            src="/AboutPhotos4.png"
            alt=""
            fill
            className="object-cover p-16"
          />
        </div>
        <div className="flex flex-col gap-6">
          <h2 className="text-[40px] font-bold text-[#1E293B] leading-[110%]">
            Demokratisasi Manajemen Aset Digital
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            Melalui penggabungan teknologi cerdas dan desain yang inklusif, misi
            kami adalah menyediakan alat manajemen keuangan tercanggih yang
            dapat diakses oleh siapa saja untuk menyederhanakan proses menabung
            dan investasi.
          </p>
        </div>
      </section>
    </main>
  );
}
