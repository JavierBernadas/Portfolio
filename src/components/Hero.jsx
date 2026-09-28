import { useState, useEffect } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import JavierResume from "../assets/cv.pdf";

const navigation = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    // 1. Set initial active section from URL hash if available
    if (window.location.hash) {
      setActiveSection(window.location.hash);
    }

    // 2. Listen for URL hash changes (when clicking nav links)
    const handleHashChange = () => {
      setActiveSection(window.location.hash);
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

return (
  <div className="relative min-h-screen bg-white">
    {/* NAVBAR (Sticky/Fixed across whole page) */}
    <header className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur-md transition-all duration-300 border-b border-gray-100/50">
      <nav className="flex items-center justify-between p-6 lg:px-8">
        {/* LOGO */}
        <div className="flex lg:flex-1">
          <a
            href="#contact"
            className="group relative inline-block h-8 w-36 text-xl font-bold tracking-tight text-gray-900 [perspective:1000px]"
          >
            <div className="relative h-full w-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateX(90deg)]">
              {/* Front Face */}
              <span className="absolute inset-0 flex items-center [backface-visibility:hidden] [transform:translateZ(14px)]">
                JAV<span className="text-indigo-600">i</span>ER
              </span>

              {/* Bottom Face */}
              <span className="absolute inset-0 flex items-center whitespace-nowrap text-indigo-600 [backface-visibility:hidden] [transform:rotateX(-90deg)_translateZ(14px)]">
                WORK WITH ME→
              </span>
            </div>
          </a>
        </div>

        {/* MOBILE BUTTON */}
        <div className="flex lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="text-gray-700"
          >
            <Bars3Icon className="h-6 w-6" />
          </button>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden lg:flex lg:items-center lg:gap-x-2">
          {navigation.map((item) => {
            const isActive = activeSection === item.href;

            return (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setActiveSection(item.href)}
                className={`rounded px-4 py-2 text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-indigo-600 text-white shadow-sm"
                    : "text-gray-700 hover:bg-indigo-200 hover:text-indigo-600 active:bg-indigo-100"
                }`}
              >
                {item.name}
              </a>
            );
          })}
        </div>

<div className="hidden lg:flex lg:flex-1 lg:justify-end">
  <a
    href="#contact"
    className="group relative inline-flex items-center gap-2 rounded-full border border-indigo-400/40 bg-gradient-to-r from-indigo-600 to-violet-600 px-6 py-2.5 text-sm font-semibold text-white shadow-lg ring-2 ring-indigo-500/20 transition-all duration-300 hover:border-indigo-300/80 hover:from-indigo-500 hover:to-violet-500 hover:shadow-indigo-500/30 hover:ring-indigo-400/40 active:scale-95"
  >
    {/* Soft glowing ambient light */}
    <span className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 opacity-30 blur transition group-hover:opacity-100"></span>

    <span className="relative">Let’s Work</span>
    <span className="relative transition-transform duration-300 group-hover:translate-x-1">
      →
    </span>
  </a>
</div>
      </nav>

      {/* MOBILE MENU */}
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm" />

        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-white p-6">
          <div className="flex items-center justify-between">
            <span className="text-lg font-bold text-gray-900">Menu</span>
            <button onClick={() => setMobileMenuOpen(false)}>
              <XMarkIcon className="h-6 w-6 text-gray-700" />
            </button>
          </div>

          <div className="mt-8 space-y-4">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => {
                  setActiveSection(item.href);
                  setMobileMenuOpen(false);
                }}
                className="block text-gray-700 text-lg font-medium hover:text-indigo-600"
              >
                {item.name}
              </a>
            ))}
          </div>
        </DialogPanel>
      </Dialog>
    </header>

    {/* HERO CONTENT */}
    <div className="relative isolate px-6 pt-24 lg:px-8">
      {/* INDIGO GLOW */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.15),transparent_60%)]" />

      <div className="mx-auto max-w-3xl py-24 sm:py-32 text-center">
        {/* TAG */}
        <p className="text-midium font-medium text-indigo-600">
          Zoho Automation Developer
        </p>

        {/* TITLE */}
        <h1 className="mt-4 text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Building scalable systems and automation for modern businesses
        </h1>

        {/* DESCRIPTION */}
        <p className="mt-6 text-lg text-gray-600 leading-8">
          I design and develop internal systems, automation workflows, and API
          integrations using Zoho and modern web technologies. I focus on
          improving performance, reliability, and business efficiency.
        </p>

        {/* CTA BUTTONS */}
        <div className="mt-10 flex items-center justify-center gap-4">
          <a
            href="#projects"
            className="rounded bg-indigo-600 px-5 py-3 text-white font-medium shadow-sm hover:bg-indigo-500 transition"
          >
            View Projects
          </a>

          <a
            href={JavierResume}
            download="Javier_Canoy_CV.pdf"
            className="text-sm font-semibold text-gray-900 hover:text-indigo-600"
          >
            Download CV →
          </a>
        </div>
      </div>
    </div>
  </div>
);
}
