'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { fetchLeaderboardData } from '../utils/googleSheets';
import { LeaderboardEntry } from '../types';

export default function Leaderboard() {
  const [entries, setEntries] = useState<LeaderboardEntry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getLeaderboardData = async () => {
      const data = await fetchLeaderboardData();
      setEntries(data.sort((a, b) => b.points - a.points));
      setLoading(false);
    };

    getLeaderboardData();
  }, []);

  return (
    <section id="leaderboard" className="py-16 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-2 text-gray-900">Leaderboard</h2>
      <p className="text-center text-gray-600 mb-8">Real-time rankings of SuperteamNG Edo 20-Day BiPChallenge participants</p>
      
      {loading ? (
        <div className="text-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#068E46] mx-auto"></div>
          <p className="text-gray-600 mt-4">Loading leaderboard...</p>
        </div>
      ) : (
        <div className="overflow-x-auto rounded-lg shadow-sm border border-gray-200">
          <table className="w-full min-w-[600px]">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Rank
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Twitter Handle
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Points
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {entries.map((entry, index) => (
                <motion.tr
                  key={entry.twitterHandle}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full 
                      ${index === 0 ? 'bg-yellow-100 text-yellow-700' : 
                        index === 1 ? 'bg-gray-100 text-gray-700' : 
                        index === 2 ? 'bg-orange-100 text-orange-700' : 
                        'text-gray-600'} font-semibold`}>
                      {index + 1}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <a 
                      href={`https://twitter.com/${entry.twitterHandle.replace('@', '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-900 hover:text-[#068E46] transition-colors font-medium"
                    >
                      {entry.twitterHandle}
                    </a>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="font-semibold text-[#068E46] bg-green-50 px-3 py-1 rounded-full">
                      {entry.points}
                    </span>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
} 