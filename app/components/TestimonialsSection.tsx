'use client'

import { FaUserCircle } from 'react-icons/fa'

const testimonials = [
  {
    name: 'Arjun Mehra',
    role: 'E-commerce Seller',
    quote:
      'Rustic AI has completely changed how I showcase my products. Clean backgrounds and sharp images have boosted my online sales. It’s like having a professional editor on... call!',
  },
  {
    name: 'Nisha Patel',
    role: 'Social Media Manager',
    quote:
      'Thanks to Rustic AI, our team can create stunning social media posts and ad creatives within minutes. It keeps our brand visuals consistent without the usual back-and-forth.',
  },
  {
    name: 'Jessica Reed',
    role: 'Senior Graphic Designer at PixelWorks',
    quote:
      'Rustic AI feels like an extension of my design team. It understands brand aesthetics and helps generate polished graphics super quickly. Perfect for fast-paced agencies like ours.',
  },
  {
    name: 'Rahul Sharma',
    role: 'Founder, StreetMoto India',
    quote:
      'From event posters to digital ads, Rustic AI helps me design professional visuals without hiring a full-time designer. It’s quick, reliable, and surprisingly easy to use.',
  },
  {
    name: 'Sophia Martinez',
    role: 'Founder, Bloom Interiors',
    quote:
      'Visual storytelling is crucial for my brand. Rustic AI lets me create beautiful, cohesive graphics that match my design language — all without needing heavy software or big budgets.',
  },
  {
    name: 'Ethan Walker',
    role: 'Product Photographer',
    quote:
      'Rustic AI’s upscaling tool preserves every detail of my product shots. It’s a must-have for any photographer who wants to deliver crisp, high-quality images without hours of editing.',
  },
]

export default function TestimonialsSection() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-2">
          <span className="bg-gradient-to-r from-pink-500 to-purple-600 text-transparent bg-clip-text">
            What our customers say
          </span>
        </h2>
        <p className="text-gray-700 text-lg mb-12">Loved by 100+ businesses and creators</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map(({ name, role, quote }) => (
            <div
              key={name}
              className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-left hover:shadow-md transition"
            >
              <div className="flex items-center mb-3">
                <FaUserCircle className="text-3xl text-blue-400 mr-3" />
                <div>
                  <h3 className="font-semibold text-gray-800">{name}</h3>
                  <p className="text-sm text-gray-500">{role}</p>
                </div>
              </div>
              <p className="text-sm text-gray-600">{quote}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
