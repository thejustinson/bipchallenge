import { LeaderboardEntry, SheetResponse } from '../types';

const SHEET_ID = process.env.NEXT_PUBLIC_GOOGLE_SHEET_ID;
const SHEET_NAME = process.env.NEXT_PUBLIC_SHEET_NAME || 'Sheet1';

export async function fetchLeaderboardData(): Promise<LeaderboardEntry[]> {
  try {
    const response = await fetch(
      `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json&sheet=${SHEET_NAME}`
    );
    
    const text = await response.text();
    const jsonString = text.substring(47).slice(0, -2);
    const json: SheetResponse = JSON.parse(jsonString);
    
    return json.table.rows.map((row) => ({
      twitterHandle: String(row.c[0]?.v || ''),
      points: Number(row.c[1]?.v || 0),
      timestamp: String(row.c[2]?.v || '')
    }));
  } catch (error) {
    console.error('Error fetching leaderboard data:', error);
    return [];
  }
} 