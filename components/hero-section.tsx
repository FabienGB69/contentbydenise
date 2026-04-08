'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';

export function HeroSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="section-space">
      <div className="container-shell grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0, y: 16 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            UGC Creator & Event Content Creator for premium brands in Belgium
          </p>
          <h1 className="font-serif text-4xl leading-tight sm:text-5xl">
            UGC & Event Content for Premium Brands in Belgium
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-neutral-700">
            Denise creates native, aesthetic and high-converting content for lifestyle, beauty, hospitality and event
            brands.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="rounded-full bg-foreground px-5 py-3 text-sm text-white hover:bg-neutral-800">
              Book a discovery call
            </Link>
            <Link href="/portfolio" className="rounded-full border px-5 py-3 text-sm hover:bg-white">
              View portfolio
            </Link>
          </div>
        </motion.div>
        <div className="card min-h-80 bg-muted">
          <div className="flex h-full min-h-72 items-end rounded-xl border border-dashed border-neutral-300 bg-gradient-to-b from-white to-muted p-5">
            <p className="text-sm text-neutral-600">Visual placeholder for featured reel, campaign montage, or portrait.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
