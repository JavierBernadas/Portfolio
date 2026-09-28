import { motion } from "framer-motion";
import Testimonials from "./Testimonials";

const links = [
  { name: "View Projects", href: "#projects" },
  { name: "Automation Work", href: "#skills" },
  { name: "Contact Me", href: "#contact" },
];

const stats = [
  { name: "Systems Built", value: "10+" },
  { name: "Automation Workflows", value: "Zoho" },
  { name: "API Integrations", value: "Active" },
  { name: "Business Support Systems", value: "Yes" },
];

export default function About() {
  return (
    <div>
      {/* ABOUT SECTION (WHITE PREMIUM STYLE) */}
      <section className="relative isolate overflow-hidden bg-white py-24 sm:py-32">
        {/* Soft Indigo Glow Background */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.10),transparent_60%)]"
        />

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* HEADER */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-2xl lg:mx-0"
          >
            <h2 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              About Me
            </h2>

            <p className="mt-6 text-lg text-gray-600 leading-8">
              I am an{" "}
              <span className="text-gray-900 font-semibold">
                IT and System Developer
              </span>{" "}
              specializing in building and maintaining internal systems that
              support business operations.
              <br />
              <br />
              I design and implement scalable automation solutions using Zoho
              applications, and develop integrations between Zoho systems and
              external platforms through APIs.
              <br />
              <br />
              My focus is improving system performance, security, and
              reliability while working closely with cross-functional teams to
              deliver efficient and scalable technical solutions.
            </p>
          </motion.div>

          {/* LINKS + STATS */}
          <div className="mx-auto mt-12 max-w-5xl lg:mx-0">
            {/* LINKS */}
            <div className="flex flex-wrap gap-3 text-sm font-semibold">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="rounded-full border border-gray-200 bg-white px-4 py-2 text-gray-600 transition hover:border-indigo-300 hover:text-indigo-600 hover:shadow-sm"
                >
                  {link.name} →
                </a>
              ))}
            </div>

            {/* STATS */}
     <dl className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
  {stats.map((stat, i) => (
    <motion.div
      key={stat.name}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: i * 0.1 }}
      className="group relative flex flex-col-reverse gap-2 rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:border-transparent hover:bg-indigo-900 hover:shadow-2xl hover:-translate-y-1"
    >
      <dt className="text-sm text-gray-500 transition-colors duration-300 group-hover:text-slate-400">
        {stat.name}
      </dt>
      <dd className="text-3xl font-bold tracking-tight text-gray-900 transition-colors duration-300 group-hover:text-white">
        {stat.value}
      </dd>
    </motion.div>
  ))}
</dl>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <Testimonials />
    </div>
  );
}
