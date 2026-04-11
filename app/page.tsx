"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const perfumes = [
    { id: 1, name: "Dior Sauvage", type: "Woody" },
    { id: 2, name: "Lazy Sunday Morning", type: "Clean" },
    { id: 3, name: "Black Opium", type: "Sweet" },
    { id: 4, name: "Aqua Di Gio", type: "Fresh" },
  ];

  return (
    <div className="min-h-screen bg-black text-white">

      {/* 헤더 */}
      <div className="flex justify-between items-center p-6">
        <h1 className="text-2xl font-bold">🔥 HyangPick</h1>

        <button
          onClick={() => router.push("/quiz")}
          className="bg-white text-black px-4 py-2 rounded-xl font-semibold hover:opacity-80"
        >
          테스트
        </button>
      </div>

      {/* 카드 */}
      <div className="grid grid-cols-2 gap-4 p-6">
        {perfumes.map((p) => (
          <div
            key={p.id}
            className="bg-neutral-900 p-4 rounded-2xl hover:scale-105 transition cursor-pointer"
          >
            <div className="h-28 bg-neutral-700 rounded-xl mb-3 flex items-center justify-center">
              <span className="text-gray-400 text-sm">IMAGE</span>
            </div>

            <h2 className="text-lg font-semibold">{p.name}</h2>
            <p className="text-gray-400 text-sm">{p.type}</p>
          </div>
        ))}
      </div>

    </div>
  );
}