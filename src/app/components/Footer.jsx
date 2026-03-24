import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="w-full h-auto flex flex-col justify-center items-center mt-20 gap-5">
      <Image
        src="/FooterLogo.png"
        alt="Placeholder 4"
        width={100}
        height={75}
      ></Image>
      <h1 className="sm:text-[55px] text-4xl  font-bold text-center max-w-3xl text-balance font-['Plus_Jakarta_Sans',sans-serif] ">
        Siap Pegang Kendali Finansial Anda?
      </h1>
      <p className="text-[#1C0606AB] font-normal text-lg text-center leading-[100%] max-w-2xl">
        Lihat bagaimana Monify mentransformasi cara Anda menabung dan bertumbuh
        setiap hari.
      </p>
      <Link
        href="/demo"
        className="bg-[#FFAC33] hover:bg-[#f09615] text-white px-7 py-2.5 rounded-lg font-bold text-sm transition-all shadow-md flex items-center justify-center text-center"
      >
        Coba Sekarang
      </Link>
      <div className="min-h-56 h-auto   w-[90%] sm:w-[75%] bg-black rounded-t-[40px] px-10 py-12 flex flex-col md:flex-row justify-between relative overflow-hidden">
        <div className="flex flex-col justify-between h-full space-y-12 md:space-y-0">
          <div className="flex items-center gap-2">
            <Image
              src="/LogoWhite.png"
              alt="Monity Logo"
              width={120}
              height={40}
            />
          </div>
          <p className="text-gray-500 text-sm font-light">
            © 2026 Monity. All rights reserved.
          </p>
        </div>

        <div className="flex flex-wrap gap-12 md:gap-20 mt-10 md:mt-0">
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold text-sm">Navigasi</h4>
            <div className="flex flex-col gap-2">
              {["Beranda", "Tentang", "Solusi", "Kontak"].map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="text-gray-400 text-sm hover:text-white transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold text-sm">Sosial Media</h4>
            <div className="flex flex-col gap-2">
              {["YouTube", "Facebook", "Instagram"].map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="text-gray-400 text-sm hover:text-white transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold text-sm">Demo</h4>
            <Link
              href="/demo"
              className="bg-white text-black px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-gray-200 transition-all text-center"
            >
              Coba Sekarang
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
