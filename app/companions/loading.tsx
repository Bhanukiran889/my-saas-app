import React from "react";

const Loading = () => {
  return (
    <main className="animate-pulse px-4 py-8">
      {/* Top bar with title and filters */}
      <section className="flex justify-between gap-4 max-sm:flex-col mb-6">
        <div className="h-8 w-1/3 bg-gray-300 rounded-md" />

        <div className="flex gap-4">
          <div className="h-10 w-48 bg-gray-200 rounded-md" />
          <div className="h-10 w-36 bg-gray-200 rounded-md" />
        </div>
      </section>

      {/* Skeleton grid of companion cards */}
      <section className="companions-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {[...Array(8)].map((_, idx) => (
          <div key={idx} className="h-48 bg-gray-200 rounded-lg" />
        ))}
      </section>
    </main>
  );
};

export default Loading;
