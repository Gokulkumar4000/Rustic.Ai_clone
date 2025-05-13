export default function NextStep() {
  return (
    <section className="w-full  flex items-center justify-center bg-gradient-to-b from-white via-[#f5ebff] to-white py-4 px-7">
      <div className="text-center max-w-xl mt-10 mb-10">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
          Transform Your Creative Vision with AI
        </h2>

        <p className="mt-3 text-sm md:text-base text-gray-700 leading-snug">
          Unleash unlimited design possibilities with our AI-powered studio.<br />
          Create custom artwork that matches your unique style.
        </p>

        <div className="mt-6">
          <a
            href="#"
            className="inline-flex items-center justify-center px-6 py-3 text-white text-sm md:text-base font-medium rounded-md bg-gradient-to-r from-purple-500 to-indigo-600 shadow-md hover:brightness-110 transition duration-200"
          >
            Start Creating Now
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        <div className="mt-4 flex flex-col sm:flex-row justify-center items-center gap-3 text-xs text-gray-600">
          <div className="flex items-center gap-1">
            <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            Free to start
          </div>
          <div className="flex items-center gap-1">
            <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            No credit card required
          </div>
        </div>
      </div>
    </section>
  )
}
