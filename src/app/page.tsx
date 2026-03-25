// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import { motion } from "framer-motion";

// export default function Home() {
//   return (
//     <div className="w-full h-auto flex flex-col items-center mt-52 gap-5 ">
//       <h1 className="sm:text-[55px] text-4xl  font-bold text-center max-w-5xl text-balance font-['Plus_Jakarta_Sans',sans-serif] leading-[100%]">
//         Cara Baru Mengelola Uang dengan Lebih Sadar
//       </h1>
//       <p className="text-[#1C0606AB] font-normal text-lg text-center leading-[100%]">
//         Setiap rupiah tercatat, setiap keputusan lebih bijak.
//       </p>
//       <div className="flex gap-3.5 items-center flex-col  sm:flex-row">
//         <Link
//           href="/demo"
//           className="bg-[#FFAC33] hover:bg-[#f09615] text-white px-7 py-2.5 rounded-lg font-bold text-sm transition-all shadow-md flex items-center justify-center text-center"
//         >
//           Coba Sekarang
//         </Link>
//         <Link
//           href="/demo"
//           className="bg-white hover:bg-[#fffafa] text-[#f09615] px-7 py-2.5 rounded-lg font-bold text-sm transition-all shadow-md flex items-center justify-center text-center"
//         >
//           Lihat Cara Kerja
//         </Link>
//       </div>
//       <span className="h-20"></span>
//       <div className="h-96 w-[70%]  sm:h-175 sm:w-[70%] bg-white border-8 rounded-4xl mb-10 relative">
//         <Image
//           src="/1.png"
//           alt="Placeholder 1"
//           width={200}
//           height={150}
//           className="absolute -left-5 sm:-left-20 md:-left-50 top-10 w-24 sm:w-40 md:w-[200px] h-auto transition-all"
//         />

//         <Image
//           src="/2.png"
//           alt="Placeholder 2"
//           width={200}
//           height={150}
//           className="absolute -right-5 sm:-right-20 md:-right-50 top-20 w-24 sm:w-40 md:w-[200px] h-auto transition-all"
//         />

//         <Image
//           src="/3.png"
//           alt="Placeholder 3"
//           width={200}
//           height={150}
//           className="absolute -right-5 sm:-right-20 md:-right-50 -bottom-20 w-24 sm:w-40 md:w-[200px] h-auto transition-all"
//         />

//         <Image
//           src="/4.png"
//           alt="Placeholder 4"
//           width={200}
//           height={150}
//           className="absolute -left-5 sm:-left-20 md:-left-50 -bottom-14 w-24 sm:w-40 md:w-[200px] h-auto transition-all"
//         />
//       </div>
//       <section className="relative w-full py-24 overflow-hidden ">
//         <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-20 px-6">
//           <h2 className="text-[55px] font-bold text-[#1E293B] font-['Plus_Jakarta_Sans',sans-serif] leading-[110%] tracking-[-0.03em]">
//             Kenapa Pilih <span className="text-[#FFAC33]">Monify?</span>
//           </h2>
//           <p className="text-[#1C0606AB] font-medium text-xl mt-5">
//             Sistem yang dirancang untuk mempermudah hidup, bukan menambah beban
//             pikiran.
//           </p>
//         </div>

//         <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
//           {[
//             {
//               icon: "/Crosshair.png",
//               title: "Presisi Tanpa Ribet",
//               desc: "membantu mengategorikan transaksi Anda secara instan dan akurat.",
//             },
//             {
//               icon: "/HandEye.png",
//               title: "Transparansi Total",
//               desc: "Lihat ke mana setiap sen mengalir. Tidak ada lagi “biaya siluman” atau langganan terlupakan",
//             },
//             {
//               icon: "/Strategy.png",
//               title: "Strategi Pertumbuhan",
//               desc: "Dapatkan rekomendasi cerdas untuk alih pengeluaran impulsif jadi tabungan produktif.",
//             },
//           ].map((feature, index) => (
//             <motion.div
//               key={index}
//               whileHover={{ y: -10 }}
//               className="bg-white p-10 rounded-[32px] shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-gray-100 flex flex-col gap-6"
//             >
//               <div className="w-14 h-14 rounded-full bg-orange-50 flex items-center justify-center">
//                 <Image
//                   src={feature.icon}
//                   alt={feature.title}
//                   width={28}
//                   height={28}
//                 />
//               </div>
//               <div className="flex flex-col gap-2">
//                 <h3 className="text-xl font-bold text-[#1E293B]">
//                   {feature.title}
//                 </h3>
//                 <p className="text-gray-500 text-sm leading-relaxed">
//                   {feature.desc}
//                 </p>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16 mb-32">
//           <Image
//             src="/Frame2.png"
//             alt="Hubungkan"
//             width={400}
//             height={300}
//             className="w-full h-full md:w-1/2 backdrop-blur-sm rounded-[40px] border  flex items-center justify-center shadow-sm"
//           />
//           <div className="w-full md:w-1/2 flex flex-col gap-6">
//             <h2 className="text-[48px] font-bold text-[#1E293B] leading-[110%]">
//               Hubungkan & Pantau
//             </h2>
//             <p className="text-gray-500 text-lg">
//               Mulailah perjalanan finansial Anda dengan mengintegrasikan seluruh
//               sumber pendapatan.
//             </p>
//             <ul className="space-y-4">
//               {[
//                 "Sinkronisasi Instan",
//                 "Visualisasi Nyata",
//                 "Kategorisasi Otomatis",
//                 "Update Real-Time",
//               ].map((item) => (
//                 <li key={item} className="flex items-center gap-3">
//                   <div className="w-2 h-2 rounded-full bg-[#FFAC33]" />
//                   <span className="font-bold text-[#1E293B]">{item}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>

//         <div className="max-w-6xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-16 mb-32">
//           <div className="w-full md:w-1/2 flex flex-col gap-6">
//             <h2 className="text-[48px] font-bold text-[#1E293B] leading-[110%]">
//               Kelola & Optimalkan
//             </h2>
//             <p className="text-gray-500 text-lg">
//               Kelola keuangan dengan lebih efisien melalui alat analisis yang
//               intuitif.
//             </p>
//             <ul className="space-y-4">
//               {[
//                 "Setiap Rupiah Terjaga",
//                 "Analisis Kritikal",
//                 "Kontrol Penuh",
//                 "Target Masa Depan",
//               ].map((item) => (
//                 <li key={item} className="flex items-center gap-3">
//                   <div className="w-2 h-2 rounded-full bg-[#FFAC33]" />
//                   <span className="font-bold text-[#1E293B]">{item}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <Image
//             src="/Frame1.png"
//             alt="Hubungkan"
//             width={400}
//             height={300}
//             className="w-full h-full md:w-1/2 backdrop-blur-sm rounded-[40px] border  flex items-center justify-center shadow-sm"
//           />
//         </div>

//         <section className="relative w-full py-24 px-6">
//           <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-4">
//             <h2 className="text-[48px] font-bold text-[#1E293B] leading-[110%] tracking-tight">
//               Fitur Apa Saja yang Ada <br /> di Dalam{" "}
//               <span className="text-[#FFAC33]">Monity?</span>
//             </h2>
//             <p className="text-gray-500 text-lg font-medium">
//               Sistem cerdas yang menyederhanakan cara Anda mengelola uang setiap
//               hari.
//             </p>
//           </div>

//           <div className="max-w-6xl mx-auto flex flex-col gap-6">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div className="bg-white rounded-[32px] border border-gray-100 shadow-sm overflow-hidden flex flex-col">
//                 <div className="relative w-full h-[240px] bg-[#F9F6F2] flex items-center justify-center p-8">
//                   <Image
//                     src="/Frame3.png"
//                     alt="Multi Account"
//                     fill
//                     className="object-contain p-10"
//                   />
//                 </div>

//                 <div className="p-8">
//                   <h3 className="text-2xl font-bold text-[#1E293B] mb-2">
//                     Multi-Account Tracking
//                   </h3>
//                   <p className="text-gray-500 font-medium">
//                     Pantau semua bank dan e-wallet satu layar.
//                   </p>
//                 </div>
//               </div>

//               <div className="bg-white rounded-[32px] border border-gray-100 shadow-sm overflow-hidden flex flex-col">
//                 <div className="relative w-full h-[240px] bg-[#F9F6F2] flex items-center justify-center p-8">
//                   <Image
//                     src="/Frame4.png"
//                     alt="Custom Tags"
//                     fill
//                     className="object-contain p-10"
//                   />
//                 </div>
//                 <div className="p-8">
//                   <h3 className="text-2xl font-bold text-[#1E293B] mb-2">
//                     Custom Tags
//                   </h3>
//                   <p className="text-gray-500 font-medium">
//                     Kelola pengeluaran spesifik dengan label yang personal.
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//               {[
//                 {
//                   title: "Export Reports",
//                   desc: "Unduh laporan ke dalam bentuk PDF atau CSV secara instan.",
//                   icon: "/HandDeposit.png",
//                 },
//                 {
//                   title: "AES-256 Security",
//                   desc: "Proteksi data finansial dengan enkripsi standar bank.",
//                   icon: "/ShieldCheck.png",
//                 },
//                 {
//                   title: "Target Savings",
//                   desc: "Wujudkan mimpi Anda dengan sistem tabungan otomatis.",
//                   icon: "/HandEye.png",
//                 },
//               ].map((item, index) => (
//                 <div
//                   key={index}
//                   className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm flex flex-col gap-4"
//                 >
//                   <div className="w-12 h-12 flex items-center justify-center">
//                     <Image
//                       src={item.icon}
//                       alt={item.title}
//                       width={32}
//                       height={32}
//                       className="object-contain"
//                     />
//                   </div>
//                   <div className="flex flex-col gap-2">
//                     <h4 className="text-xl font-bold text-[#1E293B]">
//                       {item.title}
//                     </h4>
//                     <p className="text-gray-500 text-sm leading-relaxed font-medium">
//                       {item.desc}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>
//       </section>
//     </div>
//   );
// }
"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="w-full h-auto flex flex-col items-center mt-52 gap-5 ">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="sm:text-[55px] text-4xl font-bold text-center max-w-5xl text-balance leading-[100%]"
      >
        Cara Baru Mengelola Uang dengan Lebih Sadar
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-[#1C0606AB] font-normal text-lg text-center leading-[100%]"
      >
        Setiap rupiah tercatat, setiap keputusan lebih bijak.
      </motion.p>

      <div className="flex gap-3.5 items-center flex-col sm:flex-row">
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            href="/demo"
            className="bg-[#FFAC33] hover:bg-[#f09615] text-white px-7 py-2.5 rounded-lg font-bold text-sm transition-all shadow-md flex items-center justify-center text-center"
          >
            Coba Sekarang
          </Link>
        </motion.div>

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            href="/demo"
            className="bg-white hover:bg-[#fffafa] text-[#f09615] px-7 py-2.5 rounded-lg font-bold text-sm transition-all shadow-md flex items-center justify-center text-center"
          >
            Lihat Cara Kerja
          </Link>
        </motion.div>
      </div>

      <span className="h-20"></span>

      <div className="h-96 w-[70%] sm:h-175 sm:w-[70%] bg-white border-8 rounded-4xl mb-10 relative">
        <motion.div
          whileHover={{ y: -15, rotate: -2 }}
          className="absolute -left-5 sm:-left-20 md:-left-50 top-10 cursor-pointer"
        >
          <Image
            src="/1.png"
            alt="Dashboard Preview 1"
            width={200}
            height={150}
            className="w-24 sm:w-40 md:w-[200px] h-auto"
          />
        </motion.div>

        <motion.div
          whileHover={{ y: -15, rotate: 2 }}
          className="absolute -right-5 sm:-right-20 md:-right-50 top-20 cursor-pointer"
        >
          <Image
            src="/2.png"
            alt="Dashboard Preview 2"
            width={200}
            height={150}
            className="w-24 sm:w-40 md:w-[200px] h-auto"
          />
        </motion.div>

        <motion.div
          whileHover={{ y: 15, rotate: -2 }}
          className="absolute -right-5 sm:-right-20 md:-right-50 -bottom-20 cursor-pointer"
        >
          <Image
            src="/3.png"
            alt="Dashboard Preview 3"
            width={200}
            height={150}
            className="w-24 sm:w-40 md:w-[200px] h-auto"
          />
        </motion.div>

        <motion.div
          whileHover={{ y: 15, rotate: 2 }}
          className="absolute -left-5 sm:-left-20 md:-left-50 -bottom-14 cursor-pointer"
        >
          <Image
            src="/4.png"
            alt="Dashboard Preview 4"
            width={200}
            height={150}
            className="w-24 sm:w-40 md:w-[200px] h-auto"
          />
        </motion.div>
      </div>

      <section className="relative w-full py-24 overflow-hidden ">
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-20 px-6">
          <h2 className="text-[55px] font-bold text-[#1E293B] leading-[110%] tracking-[-0.03em]">
            Kenapa Pilih <span className="text-[#FFAC33]">Monify?</span>
          </h2>
          <p className="text-[#1C0606AB] font-medium text-xl mt-5">
            Sistem yang dirancang untuk mempermudah hidup, bukan menambah beban
            pikiran.
          </p>
        </div>

        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {[
            {
              icon: "/Crosshair.png",
              title: "Presisi Tanpa Ribet",
              desc: "membantu mengategorikan transaksi Anda secara instan dan akurat.",
            },
            {
              icon: "/HandEye.png",
              title: "Transparansi Total",
              desc: "Lihat ke mana setiap sen mengalir. Tidak ada lagi “biaya siluman” atau langganan terlupakan",
            },
            {
              icon: "/Strategy.png",
              title: "Strategi Pertumbuhan",
              desc: "Dapatkan rekomendasi cerdas untuk alih pengeluaran impulsif jadi tabungan produktif.",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -10,
                boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.05)",
              }}
              className="bg-white p-10 rounded-[32px] shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-gray-100 flex flex-col gap-6"
            >
              <div className="w-14 h-14 rounded-full bg-orange-50 flex items-center justify-center">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={28}
                  height={28}
                />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold text-[#1E293B]">
                  {feature.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16 mb-32">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="w-full h-full md:w-1/2"
          >
            <Image
              src="/Frame2.png"
              alt="Hubungkan"
              width={400}
              height={300}
              className="w-full h-full backdrop-blur-sm rounded-[40px] border flex items-center justify-center shadow-sm"
            />
          </motion.div>
          <div className="w-full md:w-1/2 flex flex-col gap-6">
            <h2 className="text-[48px] font-bold text-[#1E293B] leading-[110%]">
              Hubungkan & Pantau
            </h2>
            <p className="text-gray-500 text-lg">
              Mulailah perjalanan finansial Anda dengan mengintegrasikan seluruh
              sumber pendapatan.
            </p>
            <ul className="space-y-4">
              {[
                "Sinkronisasi Instan",
                "Visualisasi Nyata",
                "Kategorisasi Otomatis",
                "Update Real-Time",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#FFAC33]" />
                  <span className="font-bold text-[#1E293B]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-16 mb-32">
          <div className="w-full md:w-1/2 flex flex-col gap-6">
            <h2 className="text-[48px] font-bold text-[#1E293B] leading-[110%]">
              Kelola & Optimalkan
            </h2>
            <p className="text-gray-500 text-lg">
              Kelola keuangan dengan lebih efisien melalui alat analisis yang
              intuitif.
            </p>
            <ul className="space-y-4">
              {[
                "Setiap Rupiah Terjaga",
                "Analisis Kritikal",
                "Kontrol Penuh",
                "Target Masa Depan",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#FFAC33]" />
                  <span className="font-bold text-[#1E293B]">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="w-full h-full md:w-1/2"
          >
            <Image
              src="/Frame1.png"
              alt="Optimalkan"
              width={400}
              height={300}
              className="w-full h-full backdrop-blur-sm rounded-[40px] border flex items-center justify-center shadow-sm"
            />
          </motion.div>
        </div>

        <section className="relative w-full py-24 px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-4">
            <h2 className="text-[48px] font-bold text-[#1E293B] leading-[110%] tracking-tight">
              Fitur Apa Saja yang Ada <br /> di Dalam{" "}
              <span className="text-[#FFAC33]">Monity?</span>
            </h2>
            <p className="text-gray-500 text-lg font-medium">
              Sistem cerdas yang menyederhanakan cara Anda mengelola uang setiap
              hari.
            </p>
          </div>

          <div className="max-w-6xl mx-auto flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Multi-Account Tracking",
                  img: "/Frame3.png",
                  desc: "Pantau semua bank dan e-wallet satu layar.",
                },
                {
                  title: "Custom Tags",
                  img: "/Frame4.png",
                  desc: "Kelola pengeluaran spesifik dengan label yang personal.",
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -8 }}
                  className="bg-white rounded-[32px] border border-gray-100 shadow-sm overflow-hidden flex flex-col group cursor-pointer"
                >
                  <div className="relative w-full h-[240px] bg-[#F9F6F2] flex items-center justify-center p-8 overflow-hidden">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className="object-contain p-10 transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-[#1E293B] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 font-medium">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Export Reports",
                  desc: "Unduh laporan ke dalam bentuk PDF atau CSV secara instan.",
                  icon: "/HandDeposit.png",
                },
                {
                  title: "AES-256 Security",
                  desc: "Proteksi data finansial dengan enkripsi standar bank.",
                  icon: "/ShieldCheck.png",
                },
                {
                  title: "Target Savings",
                  desc: "Wujudkan mimpi Anda dengan sistem tabungan otomatis.",
                  icon: "/HandEye.png",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5, borderColor: "#FFAC33" }}
                  className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm flex flex-col gap-4 cursor-default transition-colors duration-300"
                >
                  <div className="w-12 h-12 flex items-center justify-center">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={32}
                      height={32}
                      className="object-contain"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h4 className="text-xl font-bold text-[#1E293B]">
                      {item.title}
                    </h4>
                    <p className="text-gray-500 text-sm leading-relaxed font-medium">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}
