'use client'

import Link from 'next/link'
import { HiArrowNarrowRight } from 'react-icons/hi'

const tools = [
  {
    title: 'Image Generator',
    description: 'A futuristic image of a car in cyberpunk',
    videoSrc: '/videos/car.mp4',
    href: '/tools/image-generator',
  },
  {
    title: 'Image Upscaler',
    description: 'Before and after AI upscaling',
    videoSrc: '/videos/dog.mp4',
    href: '/tools/image-upscaler',
  },
  {
    title: 'Background Remover',
    description: 'Remove background from portraits',
    videoSrc: '/videos/girl.mp4',
    href: '/tools/background-remover',
  },
]

export default function AICardGrid() {
  return (
    <section className="px-6 py-16 bg-white text-center">
      <h2 className="text-4xl font-extrabold text-purple-600 mb-2">
        Rustic <span className="text-purple-600">AI Tools</span>
      </h2>
      <p className="text-gray-600 mb-12 text-base">
        Make beautiful images, with the magic of AI
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {tools.map(({ title, description, videoSrc, href }) => (
          <Link
            href={href}
            key={title}
            className="group block bg-white rounded-xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-1 duration-300 w-full max-w-sm mx-auto"
          >
            <div className="relative h-40 w-full overflow-hidden rounded-t-xl">
              <video
                src={videoSrc}
                autoPlay
                loop
                muted
                playsInline
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            <div className="p-4 text-left">
              <h3 className="text-md font-semibold text-gray-800 flex items-center gap-1">
                {title}
                <HiArrowNarrowRight className="ml-1 text-purple-600 group-hover:translate-x-1 transition" />
              </h3>
              <p className="text-sm text-gray-500 mt-1">{description}</p>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-10">
        <Link
          href="/tools"
          className="inline-block px-6 py-3 text-sm font-medium text-purple-600 border border-purple-600 rounded-full hover:bg-purple-600 hover:text-white transition"
        >
          View AI Tools
        </Link>
      </div>
    </section>
  )
}
