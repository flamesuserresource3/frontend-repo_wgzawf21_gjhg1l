import { motion } from 'framer-motion';
import { Shield, Zap, Check } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Enterprise-grade',
    desc: 'Backed by best practices, accessible components, and robust performance for scale.',
  },
  {
    icon: Zap,
    title: 'Motion-first',
    desc: 'Subtle interactions and smooth transitions that make your UI feel alive.',
  },
  {
    icon: Check,
    title: 'Effortless setup',
    desc: 'Start fast with sensible defaults, then customize to match your brand.',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-20">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white to-transparent"></div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
            A refined system designed for clarity
          </h2>
          <p className="mt-4 text-gray-600">
            Clean layouts, confident type, and a crisp color system that brings focus to what matters.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              whileHover={{ y: -6 }}
              className="group rounded-2xl border border-gray-200 bg-white/70 p-6 shadow-sm backdrop-blur transition-colors hover:border-gray-300"
            >
              <div className="h-11 w-11 rounded-xl bg-gradient-to-tr from-red-500 to-rose-400 text-white grid place-items-center">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{f.title}</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">{f.desc}</p>
              <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
              <div className="mt-3 text-sm text-gray-700">Learn more →</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
