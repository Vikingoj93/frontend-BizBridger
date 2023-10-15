import React from "react";

export default function LaborPage() {
  return (
    <div className="container mx-auto space-x-4 p-4 bg-gradient-to-r from-purple-600 to-pink-600">
      <section className="w-auto  max-w-min p-4 rounded-xl shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out bg-gradient-to-r from-pink-600 to-purple-600">
        <div className="flex flex-wrap gap-4">botones</div>
      </section>
      <section className="w-2/3 p-4 rounded-xl shadow-2xl transform hover:scale-100 transition duration-300 ease-in-out bg-gradient-to-r from-pink-600 to-red-600">
        <div>render</div>
      </section>
    </div>
  );
}