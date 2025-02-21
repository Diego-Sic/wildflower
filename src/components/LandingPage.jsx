import React from "react";

const Landingpage = () => {
  return (
    <div className="font-display flex justify-center items-center h-screen bg-gray-900 text-white">
      <div className="flex items-center gap-6">
        <div className="flex flex-col items-center">
          <iframe
            src="https://open.spotify.com/embed/track/3QaPy1KgI7nu9FJEQUgn6h?utm_source=generator"
            width="100%"
            height="352"
            className="rounded-lg"
          ></iframe>
          <p className="mt-2 text-lg font-semibold">Wild Flower</p>
        </div>

        <div className="flex flex-col items-center">
          <iframe
            src="https://open.spotify.com/embed/track/2ONADYjJvqYVwjWavuY0H1?utm_source=generator"
            width="100%"
            height="352"
            className="rounded-lg"
          ></iframe>
          <p className="mt-2 text-lg font-semibold">Arrancamelo</p>
        </div>

        <div className="text-lg font-display text-center mt-4 text-graywild">
          And maybe if I can't explain all the things with words, I can make our
          artists speak
        </div>
      </div>
    </div>
  );
};

export default Landingpage;
