import { useEffect, useState } from "react";
import { Stats } from "../models/Stats";
import { getStats } from "../services/statsService";

function useStats() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  const fetchStats = async () => {
    setLoading(true);
    try {
      const data = await getStats();
      setStats(data);
      setError("");
    } catch (err: any) {
      setError(err?.response?.data?.message || err.message || "Error loading stats");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStats();
  }, []);

  return { stats, loading, error, refetch: fetchStats };
}

export default useStats;
