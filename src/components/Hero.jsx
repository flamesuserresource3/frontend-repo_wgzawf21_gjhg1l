import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden" aria-label="Hero">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/40 to-white/90"></div>

      <div className="relative z-10 mx-auto flex min-h-[92vh] max-w-7xl flex-col items-center justify-center px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/80 px-3 py-1 text-xs font-medium text-gray-700 shadow-sm backdrop-blur"
        >
          <Star className="h-3.5 w-3.5 text-amber-500" />
          New: Interactive 3D hero with tactile ripple
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.05, ease: 'easeOut' }}
          className="mt-5 max-w-4xl text-4xl font-semibold tracking-tight text-gray-900 sm:text-6xl"
        >
          Build modern sites with motion-first design
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: 'easeOut' }}
          className="mt-5 max-w-2xl text-base text-gray-600 sm:text-lg"
        >
          A clean, corporate aesthetic powered by smooth animations, subtle depth, and an interactive 3D background that responds to every move.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: 'easeOut' }}
          className="mt-8 flex flex-col items-center gap-3 sm:flex-row"
        >
          <a
            href="#get-started"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gray-900 px-6 py-3 text-sm font-medium text-white shadow-sm transition-colors hover:bg-black"
          >
            Start for free
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#features"
            className="inline-flex items-center justify-center rounded-full border border-gray-300/80 bg-white px-6 py-3 text-sm font-medium text-gray-800 shadow-sm transition-colors hover:border-gray-400"
          >
            See features
          </a>
        </motion.div>
      </div>
    </section>
  );
}
