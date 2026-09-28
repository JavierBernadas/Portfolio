import { useState } from "react"
import { motion } from "framer-motion"

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [status, setStatus] = useState("idle")
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const validate = () => {
    const newErrors = {}

    if (!form.name.trim()) newErrors.name = "Name is required"
    if (!form.email.includes("@")) newErrors.email = "Valid email required"
    if (!form.message.trim()) newErrors.message = "Message cannot be empty"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validate()) return

    setStatus("loading")

    setTimeout(() => {
      setStatus("success")
      setForm({ name: "", email: "", message: "" })

      setTimeout(() => setStatus("idle"), 3000)
    }, 1200)
  }

  return (
    <section className="relative isolate overflow-hidden bg-white py-24">

      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 w-[70rem] -translate-x-1/2 blur-3xl">
        <div className="aspect-[1155/678] w-full bg-gradient-to-tr from-indigo-200 via-pink-200 to-purple-200 opacity-30" />
      </div>

      <div className="mx-auto max-w-6xl px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Let’s work together
          </h2>
          <p className="mt-4 text-gray-600">
            Have an idea or project? I’ll help you build it into reality.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-12 lg:grid-cols-2">

          {/* FORM */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-gray-200 bg-white/70 p-8 shadow-sm backdrop-blur-md"
          >

            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="mb-2 w-full rounded-md border border-gray-200 p-3 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
            />
            {errors.name && (
              <p className="mb-3 text-sm text-red-500">{errors.name}</p>
            )}

            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="mb-2 w-full rounded-md border border-gray-200 p-3 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
            />
            {errors.email && (
              <p className="mb-3 text-sm text-red-500">{errors.email}</p>
            )}

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows="5"
              placeholder="Your Message..."
              className="mb-2 w-full rounded-md border border-gray-200 p-3 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
            />
            {errors.message && (
              <p className="mb-3 text-sm text-red-500">{errors.message}</p>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className={`mt-4 w-full rounded-md px-4 py-3 font-semibold text-white transition ${
                status === "loading"
                  ? "bg-gray-400"
                  : "bg-indigo-600 hover:bg-indigo-500"
              }`}
            >
              {status === "loading"
                ? "Sending..."
                : status === "success"
                ? "Message Sent ✓"
                : "Send Message"}
            </button>

            {status === "success" && (
              <p className="mt-3 text-center text-sm text-green-600">
                Your message has been sent successfully!
              </p>
            )}
          </motion.form>

          {/* SIDE PANEL */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center gap-6"
          >

            <div className="rounded-2xl border border-gray-200 p-6 transition hover:shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900">
                Fast Response
              </h3>
              <p className="text-gray-600">
                Usually within 24 hours.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-6 transition hover:shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900">
                Services
              </h3>
              <p className="text-gray-600">
                React apps, UI design, backend APIs, dashboards.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-6 transition hover:shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900">
                Contact
              </h3>
              <p className="text-gray-600">
                your@email.com <br />
                Cebu, Philippines
              </p>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  )
}