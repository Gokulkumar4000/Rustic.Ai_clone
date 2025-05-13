// components/HeroSection.tsx
'use client';

import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';
import Image from 'next/image';

const SHAPES = [
  '/svgs/christmas-candle-svgrepo-com.svg',
  '/svgs/radio-svgrepo-com.svg',
  '/svgs/cloud-rain-alt-svgrepo-com.svg',
  '/svgs/angles-up-svgrepo-com.svg',
  '/svgs/face-smile-svgrepo-com.svg',
  '/svgs/lightbulb-alt-svgrepo-com.svg',
  '/svgs/music-svgrepo-com.svg',
];

const getRandom = (min: number, max: number) => Math.random() * (max - min) + min;

const generateRandomValues = (viewport: { width: number; height: number }) => ({
  startX: getRandom(0, viewport.width),
  startY: getRandom(0, viewport.height),
  offsetX: getRandom(-900, 600),
  offsetY: getRandom(-300, 400),
  randomSize: getRandom(20, 40),
  opacity: getRandom(0.15, 0.3),
  rotateSpeed: getRandom(16, 32),
  initialRotate: getRandom(0, 360),
  svg: SHAPES[Math.floor(Math.random() * SHAPES.length)],
});

const FloatingShape = ({
  mouse,
  viewport,
}: {
  mouse: { x: number; y: number };
  viewport: { width: number; height: number };
}) => {
  const controls = useAnimation();
  const [values] = useState(() => generateRandomValues(viewport));

  useEffect(() => {
    controls.start({
      rotate: 360,
      transition: {
        repeat: Infinity,
        duration: values.rotateSpeed,
        ease: 'linear',
      },
    });
  }, [controls, values.rotateSpeed]);

  useEffect(() => {
    controls.start({
      x: mouse.x * 0.05 + values.offsetX,
      y: mouse.y * 0.05 + values.offsetY,
      transition: {
        duration: 1.8,
        ease: 'easeOut',
      },
    });
  }, [mouse, controls, values.offsetX, values.offsetY]);

  return (
    <motion.div
      className="absolute pointer-events-none"
      initial={{
        x: values.startX,
        y: values.startY,
        opacity: values.opacity,
        rotate: values.initialRotate,
      }}
      animate={controls}
      style={{
        width: values.randomSize,
        height: values.randomSize,
      }}
    >
      <Image
        src={values.svg}
        alt="Floating shape"
        width={100}
        height={100}
        className="h-full w-full object-contain"
        quality={30}
        priority={false}
        onError={(e) => {
          (e.target as HTMLImageElement).style.display = 'none';
        }}
      />
    </motion.div>
  );
};

const HeroSection = () => {
  const [shapeCount, setShapeCount] = useState(20);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [viewport, setViewport] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1000,
    height: typeof window !== 'undefined' ? window.innerHeight : 600,
  });

  useEffect(() => {
    setShapeCount(20 + Math.floor(Math.random() * 6)); // 20 to 25

    const onResize = () =>
      setViewport({ width: window.innerWidth, height: window.innerHeight });

    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    const updateMouse = (e: MouseEvent) =>
      setMouse({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', updateMouse);
    return () => window.removeEventListener('mousemove', updateMouse);
  }, []);

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-[#e0f2ff] to-white overflow-hidden">
      {Array.from({ length: shapeCount }).map((_, i) => (
        <FloatingShape key={i} mouse={mouse} viewport={viewport} />
      ))}

      <div className="container mx-auto px-4 py-12 z-10 relative">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
          >
            The AI Design Studio for{' '}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Graphic Designers
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-1xl text-gray-600 mb-10"
          >
            Crafted to make you{' '}
            <span className="font-semibold text-indigo-600">faster</span> and
            more <span className="font-semibold text-purple-600">creative</span>
            .<br />
            AI studio for graphic designers, entrepreneurs, and influencers.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-full shadow-lg mb-4 hover:shadow-xl transition-shadow duration-300"
            >
              Start For Free →
            </motion.button>
            <p className="text-gray-500 text-sm md:text-base">
              No Credit Card Required
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
