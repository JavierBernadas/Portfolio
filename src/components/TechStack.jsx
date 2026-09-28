import { motion } from "framer-motion"
import {
  Code2,
  Globe,
  Database,
  Cpu,
  GitBranch,
  Layers,
  Zap,
  Server,
} from "lucide-react"

const stacks = [
  {
    title: "Frontend",
    icon: Globe,
    items: ["React", "Tailwind CSS", "Vite", "Framer Motion"],
  },
  {
    title: "Backend",
    icon: Server,
    items: ["Node.js", "REST API", "Express", "Zoho API"],
  },
  {
    title: "Database",
    icon: Database,
    items: ["MySQL", "MongoDB", "Zoho CRM Data"],
  },
  {
    title: "Automation",
    icon: Zap,
    items: ["Zoho Flow", "Zoho Creator", "API Integration"],
  },
  {
    title: "Tools",
    icon: GitBranch,
    items: ["Git", "GitHub", "Postman", "VS Code"],
  },
  {
    title: "Architecture",
    icon: Layers,
    items: ["System Design", "API Design", "Scalable Workflows"],
  },
]

export default function TechStack() {
  return (
    <section className="relative isolate overflow-hidden bg-white py-24 sm:py-32">

      {/* Soft Glow Background */}
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
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Tech Stack
          </h2>
          <p className="mt-4 text-gray-600">
            Tools, technologies, and systems I use to build scalable solutions.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {stacks.map((stack, i) => {
            const Icon = stack.icon

            return (
              <motion.div
                key={stack.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md"
              >

                {/* ICON + TITLE */}
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-indigo-50 p-2">
                    <Icon className="h-5 w-5 text-indigo-600" />
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900">
                    {stack.title}
                  </h3>
                </div>

                {/* ITEMS */}
                <ul className="mt-4 space-y-2">
                  {stack.items.map((item) => (
                    <li
                      key={item}
                      className="text-sm text-gray-600 flex items-center gap-2"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
                      {item}
                    </li>
                  ))}
                </ul>

              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}