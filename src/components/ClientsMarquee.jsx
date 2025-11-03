import { motion, useAnimationControls } from 'framer-motion';
import { useEffect } from 'react';

const logos = [
  { name: 'Acme', src: 'https://dummyimage.com/120x40/000/fff&text=Acme' },
  { name: 'Zenith', src: 'https://dummyimage.com/120x40/000/fff&text=Zenith' },
  { name: 'Nova', src: 'https://dummyimage.com/120x40/000/fff&text=Nova' },
  { name: 'Aperture', src: 'https://dummyimage.com/120x40/000/fff&text=Aperture' },
  { name: 'Polar', src: 'https://dummyimage.com/120x40/000/fff&text=Polar' },
  { name: 'Vertex', src: 'https://dummyimage.com/120x40/000/fff&text=Vertex' },
];

export default function ClientsMarquee() {
  const controls = useAnimationControls();

  useEffect(() => {
    controls.start({
      x: ['0%', '-50%'],
      transition: { duration: 20, ease: 'linear', repeat: Infinity },
    });
  }, [controls]);

  return (
    <section id="clients" className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-500">Trusted by forward-thinking teams</p>
        </div>
        <div className="relative mt-8 overflow-hidden">
          <motion.div className="flex gap-12" animate={controls}>
            {[...logos, ...logos].map((logo, idx) => (
              <img
                key={idx}
                src={logo.src}
                alt={logo.name}
                className="h-8 w-auto opacity-70 hover:opacity-100 transition-opacity"
                loading="lazy"
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
