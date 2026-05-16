"use client";

import { motion } from "framer-motion";

/**
 * Next.js template, re-mounts on every route change. The framer-motion
 * entrance animates each new page in (fade + lift). The CSS class
 * .page-transition handles the yellow wipe line that sweeps across the
 * viewport during the navigation.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      className="page-transition"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
