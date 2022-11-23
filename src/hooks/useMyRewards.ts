import { createQuery } from "@tanstack/solid-query";
import { apiHelper } from "../services/api-helper";

const useMyRewards = () =>
  createQuery(
    () => ["rewards"],
    () => apiHelper.getMyReward({}),
    {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    }
  );

export default useMyRewards;
