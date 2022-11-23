import { createQuery } from "@tanstack/solid-query";
import { apiHelper } from "../services/api-helper";

const useTickets = (userId: string) =>
  createQuery(["tickets", userId], () => apiHelper.getMyTickets(userId), {
    enabled: userId != null,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });

export default useTickets;
