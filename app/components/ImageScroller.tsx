'use client';

import { motion } from 'framer-motion';
import { useMemo } from 'react';
import Image from 'next/image';

const demoImages = [
  '/demo/car.avif',
  '/demo/mario.avif',
  '/demo/baby.avif',
  '/demo/cat-crack.avif',
  '/demo/sun.avif',
  '/demo/girl.avif',
];


// Helper to shuffle and optionally duplicate some
const getRandomizedImages = (source: string[], count: number) => {
  const pool = [...source];
  while (pool.length < count) {
    pool.push(...source); // duplicate until enough
  }
  return pool
    .sort(() => Math.random() - 0.5)
    .slice(0, count);
};

const ImageRow = ({
  images,
  duration = 40,
}: {
  images: string[];
  duration?: number;
}) => (
  <motion.div
    className="flex gap-6 min-w-max"
    animate={{ x: ['0%', '-50%'] }}
    transition={{
      repeat: Infinity,
      duration,
      ease: 'linear',
    }}
  >
    {[...images, ...images].map((src, i) => (
      <Image
        key={i}
        src={src}
        alt={`scroll-img-${i}`}
        width={240}
        height={160}
        className="w-[300px] h-[200px] object-cover rounded-lg"
      />
    ))}
  </motion.div>
);

const ImageScroller = () => {
  const row1 = useMemo(() => getRandomizedImages(demoImages, 10), []);
  const row2 = useMemo(() => getRandomizedImages(demoImages, 10), []);

  return (
    <div className="w-full overflow-hidden py-12 bg-white space-y-8">
      <div className="overflow-hidden">
        <ImageRow images={row1} duration={25} />
      </div>
      <div className="overflow-hidden">
        <ImageRow images={row2} duration={25} />
      </div>
    </div>
  );
};

export default ImageScroller;