'use client';
import { motion, AnimatePresence } from 'framer-motion';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AboutModal({ isOpen, onClose }: AboutModalProps) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative text-left"
        >
          <div className="sticky top-0 bg-white z-10 p-6 md:p-8 border-b">
            <div className="flex justify-between items-start">
              <div className="flex flex-col items-start">
                <h2 className="text-2xl font-bold text-gray-900">BiPChallenge</h2>
                <p className="text-gray-500 mt-1">Build In Public</p>
              </div>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          <div className="p-6 md:p-8 space-y-8">
            <section className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                The Build in Public initiative has been a core part of SuperteamNG, encouraging builders and creators to document their work transparently.
              </p>
              <p className="text-gray-700 leading-relaxed">
                SuperteamNG Edo is taking it a step further with a 20-day challenge designed to showcase the incredible talent in the state.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Challenge Overview</h3>
              <div className="space-y-2">
                <p className="text-gray-700">📅 Duration: February 17 - March 8, 2025</p>
                <p className="text-gray-700">🎯 Goal: Daily documentation of building, learning, and implementing within the Solana ecosystem</p>
              </div>
              <p className="mt-4 text-gray-700">
                This challenge is about consistency, growth, and community engagement.
              </p>
              <p className="mt-4 text-gray-700">
                Whether you&apos;re building dApps, designing, creating content, or writing about Web3, this is your chance to show your work while competing for rewards!
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Why Now?</h3>
              <p className="text-gray-700 mb-3">
                The <a href="https://twitter.com/solana" target="_blank" rel="noopener noreferrer" className="text-[#068E46] hover:underline">@solana</a> and <a href="https://twitter.com/SuperteamNG" target="_blank" rel="noopener noreferrer" className="text-[#068E46] hover:underline">@SuperteamNG</a> ecosystem is buzzing with activity:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• <a href="https://twitter.com/littleunusualHQ" target="_blank" rel="noopener noreferrer" className="text-[#068E46] hover:underline">@littleunusualHQ</a> Competitions</li>
                <li>• <a href="https://twitter.com/SonicSVM" target="_blank" rel="noopener noreferrer" className="text-[#068E46] hover:underline">@SonicSVM</a> Hackathon is underway</li>
                <li>• <a href="https://x.com/SuperteamNG/status/1883072557244702811" target="_blank" rel="noopener noreferrer" className="text-[#068E46] hover:underline">Startup Village</a> is coming!!!</li>
                <li>• Tons of bounties and projects are up for grabs on the Earn Platform</li>
              </ul>
              <p className="mt-4 text-gray-700">
                This challenge is an opportunity for Edo builders and creatives to stand out, collaborate, and get recognized.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Who Can Participate?</h3>
              <p className="text-gray-700 mb-3">This challenge is open to anyone actively contributing to the state, including:</p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#068E46]">✅</span>
                  <span><strong>Developers</strong> – Smart contracts, dApps, tooling, or experiments</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#068E46]">✅</span>
                  <span><strong>Designers</strong> – UI/UX, branding, or visual assets</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#068E46]">✅</span>
                  <span><strong>Writers & Content Creators</strong> – Articles, threads, videos, explainers, or project updates</span>
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">How It Works</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Daily Submissions</h4>
                  <p className="text-gray-700 mb-2">Share your work each day, whether it&apos;s:</p>
                  <ol className="list-decimal pl-5 space-y-1 text-gray-700">
                    <li>Code commits or feature updates</li>
                    <li>UI/UX design progress</li>
                    <li>Blog posts, Twitter threads, or videos</li>
                    <li>Bounty progress or project documentation</li>
                    <li>Any valuable contribution to the ecosystem</li>
                  </ol>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Point System</h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Daily entries earn points</li>
                    <li>• A public leaderboard will track standings</li>
                    <li>• Consistency & quality matter most</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Rewards</h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Top 3 participants will win special rewards</li>
                    <li>• Recognition within SuperteamNG Edo & beyond</li>
                    <li>• A chance to showcase work to a wider Solana audience</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <p className="text-gray-700 mb-4">
                This challenge isn&apos;t just about winning—it&apos;s about growth, visibility, and networking.
              </p>
              <p className="text-gray-700 mb-4">By participating, you&apos;ll:</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#068E46]">✅</span>
                  <span>Refine your skills through consistent practice</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#068E46]">✅</span>
                  <span>Gain exposure within the Web3 space</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#068E46]">✅</span>
                  <span>Connect with other builders & potential collaborators</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#068E46]">✅</span>
                  <span>Show the world that Edo is a powerhouse in Solana development</span>
                </li>
              </ul>
              <p className="mt-6 text-gray-700">
                Whether you&apos;re a developer, designer, writer, or content creator, this challenge is your chance to build, share, and shine.
              </p>
            </section>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

