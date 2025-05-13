'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const cards = [
  {
    title: 'E-commerce Owners',
    description:
      'Train AI on your product images and generate unlimited quality product photos, variations, and lifestyle shots.',
    bg: 'bg-blue-50',
    images: ['/demo/car.avif'],
    layoutType: 'single',
  },
  {
    title: 'For Creators',
    description:
      'Create quality visual assets trained on your style with unprecedented quality, speed, and consistency.',
    bg: 'bg-purple-50',
    images: ['/demo/mario.avif', '/demo/girl.avif', '/demo/cat-crack.avif'],
    layoutType: 'two-top-one-bottom',
  },
  {
    title: 'Marketers & Agencies',
    description:
      'Generate unlimited design assets and graphics perfectly matched to your style and brand guidelines.',
    bg: 'bg-yellow-50',
    images: ['/demo/sun.avif', '/demo/car.avif'],
    layoutType: 'two-vertical',
  },
];

const CardImageLayout = ({ images, layoutType }: { images: string[]; layoutType: string }) => {
  switch (layoutType) {
    case 'single':
      return (
        <div className="mt-6">
          <Image
            src={images[0]}
            alt="industry"
            width={400}
            height={300}
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
      );

    case 'two-top-one-bottom':
      return (
        <div className="mt-6 space-y-3 h-full">
          <div className="flex gap-2 h-1/3">
            {images.slice(0, 2).map((src, i) => (
              <div key={i} className="w-1/2 h-full overflow-hidden rounded-md group aspect-video">
                <Image
                  src={src}
                  alt={`top-${i}`}
                  width={200}
                  height={120}
                  className="w-full h-full object-cover rounded-md transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
          <div className="overflow-hidden rounded-md group aspect-video">
            <Image
              src={images[2]}
              alt="bottom"
              width={400}
              height={240}
              className="w-full h-full object-cover rounded-md transition-transform duration-300 group-hover:scale-110"
            />
          </div>
        </div>
      );

    case 'two-vertical':
      return (
        <div className="mt-6 h-full flex  gap-3">
          {images.map((src, i) => (
            <div key={i} className="w-1/2 h-full overflow-hidden rounded-md group aspect-[2/3]">
              <Image
                src={src}
                alt={`vertical-${i}`}
                width={400}
                height={320}
                className="w-full h-full object-cover rounded-md transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      );

    default:
      return null;
  }
};

const IndustryCards = () => {
  return (
    <div className="py-16 bg-white px-4 md:px-8 w-full">
      <h2 className="text-center text-3xl font-bold mb-4">
        <span className="text-transparent bg-gradient-to-r from-purple-500 to-indigo-600 bg-clip-text">
          AI Powered Editing
        </span>
        <br />
        <span className="text-gray-700 text-lg font-medium">
          tailored for your Industry
        </span>
      </h2>

      <div className="mt-10 flex flex-wrap justify-center gap-8 max-w-7xl mx-auto">
        {cards.map((card, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.03, boxShadow: '0 12px 24px rgba(0,0,0,0.1)' }}
            className={`rounded-xl p-6 transition-transform duration-300 ${card.bg} max-w-[350px] min-h-[500px] flex flex-col justify-between`}
          >
            <div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">
                {card.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">{card.description}</p>

              <button className="text-sm font-medium text-purple-600 border border-purple-400 px-4 py-2 rounded-full hover:bg-purple-100 transition">
                Start for Free →
              </button>
            </div>

            <CardImageLayout
              images={card.images}
              layoutType={card.layoutType}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default IndustryCards;
