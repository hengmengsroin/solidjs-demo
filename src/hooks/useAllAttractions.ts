import { createQuery } from "@tanstack/solid-query";
import { apiHelper } from "../services/api-helper";

interface UseAllAttractionQuery {
  minPrice?: number;
  maxPrice?: number;
  search?: string;
  province?: string;
  count?: number;
  page?: number;
  type?: string;
  services?: string[];
}

interface AttractionRes {
  data: any[];
  pagination: any;
}

const useAllAttractions = ({
  minPrice,
  maxPrice,
  search,
  province,
  count,
  page,
  type,
  services,
}: UseAllAttractionQuery) =>
  createQuery<AttractionRes>(
    () => [
      "popularSearch",
      { minPrice, maxPrice, search, province, count, page, type, services },
    ],
    () =>
      apiHelper.service.getAll(
        minPrice,
        maxPrice,
        page,
        count,
        province,
        search,
        services,
        type
      ),
    {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    }
  );

export default useAllAttractions;
