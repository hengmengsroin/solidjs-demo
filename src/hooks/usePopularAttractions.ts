import { createQuery } from "@tanstack/solid-query";
import { apiHelper } from "../services/api-helper";

const usePopularAttractions = () =>
  createQuery(() => ["popularAttraction"], queryFn, {
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
async function queryFn() {
  let result = await apiHelper.search.getPopularAttraction();
  return result;
}

export default usePopularAttractions;
