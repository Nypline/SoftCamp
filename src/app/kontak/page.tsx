import React from "react";

export default function ContactSection() {
  return (
    <section className="w-full max-w-6xl mx-auto px-6 py-24 flex flex-col md:flex-row gap-16 items-start mt-24">
      <div className="w-full md:w-1/2">
        <h2 className="text-[55px] font-bold text-[#1E293B] leading-[110%] tracking-tight">
          Hubungi Kami
        </h2>
        <p className="text-gray-500 text-xl font-medium mt-6 leading-relaxed max-w-md">
          Monity hadir untuk mendefinisikan ulang cara Anda melihat, mengelola,
          dan menumbuhkan aset setiap hari.
        </p>
      </div>

      <div className="w-full md:w-1/2 flex flex-col gap-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <label className="font-bold text-[#1E293B] text-sm ml-1">
              First Name
            </label>
            <input
              type="text"
              placeholder="John..."
              className="w-full px-5 py-3.5 rounded-xl border border-gray-100 bg-white shadow-sm focus:ring-2 focus:ring-orange-200 outline-none transition-all placeholder:text-gray-300"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-bold text-[#1E293B] text-sm ml-1">
              Last Name
            </label>
            <input
              type="text"
              placeholder="Doe..."
              className="w-full px-5 py-3.5 rounded-xl border border-gray-100 bg-white shadow-sm focus:ring-2 focus:ring-orange-200 outline-none transition-all placeholder:text-gray-300"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-bold text-[#1E293B] text-sm ml-1">Email</label>
          <input
            type="email"
            placeholder="JohnDoe@gmail.com..."
            className="w-full px-5 py-3.5 rounded-xl border border-gray-100 bg-white shadow-sm focus:ring-2 focus:ring-orange-200 outline-none transition-all placeholder:text-gray-300"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-bold text-[#1E293B] text-sm ml-1">
            Message
          </label>
          <textarea
            rows={5}
            placeholder="apakah kalian makan burger?...."
            className="w-full px-5 py-3.5 rounded-xl border border-gray-100 bg-white shadow-sm focus:ring-2 focus:ring-orange-200 outline-none transition-all resize-none placeholder:text-gray-300"
          />
        </div>

        <button className="w-full bg-[#FFAC33] hover:bg-[#f09615] text-white font-bold py-4 rounded-xl shadow-[0_10px_20px_rgba(255,172,51,0.3)] transition-all active:scale-[0.98] mt-2">
          Kirim
        </button>
      </div>
    </section>
  );
}
