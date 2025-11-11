import apiClient from "../common/apiClient";
import { Stats } from "../models/Stats";

export async function getStats(): Promise<Stats> {
  const response = await apiClient.get<Stats>("/stats");
  return response.data;
}
