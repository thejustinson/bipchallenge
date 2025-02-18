'use client';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="min-h-[60vh] flex flex-col items-center justify-center px-4 py-16 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-900">
          Build. Innovate. Progress.
        </h1>
        <p className="text-xl text-gray-800 mb-6 max-w-2xl mx-auto">
          Join the <span className="font-semibold text-[#068E46]">SuperteamNG Edo 20-Day BiPChallenge</span> and showcase your Web3 skills.  
          Track your progress, earn points, and climb the leaderboard in real time!
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <motion.a
            href="https://twitter.com/superteamng"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#068E46] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#057a3d] transition-colors"
          >
            Follow @SuperteamNG
          </motion.a>

          <motion.a
            href="#leaderboard"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gray-100 text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors border border-gray-200"
          >
            View Leaderboard
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}