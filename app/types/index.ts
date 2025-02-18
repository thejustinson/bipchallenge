export interface LeaderboardEntry {
  twitterHandle: string;
  points: number;
  timestamp: string;
}

export interface SheetResponse {
  version: string;
  status: string;
  sig: string;
  table: {
    cols: Array<{ id: string; label: string; type: string }>;
    rows: Array<{
      c: Array<{ v: string | number | null }>;
    }>;
  };
} 