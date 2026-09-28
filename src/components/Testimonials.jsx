import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Judith Black",
      role: "CEO of Workcation",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=256&h=256&fit=crop",
      text:
        "Javier delivered an outstanding web application. The UI is clean, fast, and user-friendly. Highly recommended for any serious project.",
    },
    {
      name: "Michael Chen",
      role: "Startup Founder",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=256&h=256&fit=crop",
      text:
        "The attention to detail and modern UI design exceeded our expectations. Communication was smooth and professional.",
    },
    {
      name: "Sarah Johnson",
      role: "Product Manager",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=256&h=256&fit=crop",
      text:
        "One of the best frontend developers we’ve worked with. Fast delivery and excellent code quality.",
    },
  ]

  const [index, setIndex] = useState(0)

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const current = testimonials[index]

  return (
    <section className="relative isolate overflow-hidden bg-white py-24 sm:py-32">

      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.12),transparent_60%)]" />

      <div className="mx-auto max-w-4xl px-6">

        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            What people say
          </h2>
          <p className="mt-3 text-gray-600">
            What collaborators, & teammates say
          </p>
        </div>

        {/* Carousel */}
        <div className="mt-16 relative">

          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl border border-gray-200 bg-white/70 p-10 shadow-sm backdrop-blur-md"
            >

              {/* Quote */}
              <p className="text-center text-lg text-gray-700 leading-8">
                “{current.text}”
              </p>

              {/* Profile */}
              <div className="mt-10 flex flex-col items-center">
                <img
                  src={current.image}
                  alt={current.name}
                  className="h-12 w-12 rounded-full object-cover"
                />

                <div className="mt-4 text-center">
                  <div className="font-semibold text-gray-900">
                    {current.name}
                  </div>
                  <div className="text-sm text-gray-500">
                    {current.role}
                  </div>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>

          {/* Dots */}
          <div className="mt-6 flex justify-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-2 w-2 rounded-full transition-all ${
                  i === index
                    ? "bg-indigo-600 w-6"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}