import { createQuery } from "@tanstack/solid-query";
import { apiHelper } from "../services/api-helper";

const usePopularSearchData = () =>
  createQuery(() => ["popularSearch"], getData, {
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
async function getData() {
  let result = await apiHelper.search.getPopularSearch();
  return result;
}

export default usePopularSearchData;
