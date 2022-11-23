import { createQuery } from "@tanstack/solid-query";
import { apiHelper } from "../services/api-helper";

const useAffiliateProgram = () =>
  createQuery(
    () => ["affiliate_program"],
    () => apiHelper.getAffiliateProgram({}),
    {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    }
  );

export default useAffiliateProgram;
