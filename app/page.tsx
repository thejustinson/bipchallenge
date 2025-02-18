import Hero from './components/Hero';
import Leaderboard from './components/Leaderboard';
import WhatsAppButton from './components/WhatsAppButton';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <Leaderboard />
      <WhatsAppButton />
    </main>
  );
}
