import { createQuery } from "@tanstack/solid-query";
import { apiHelper } from "../services/api-helper";

interface IQuery {
  serviceId: string;
  count?: number;
  page?: number;
}

const useReviews = ({ serviceId, count, page }: IQuery) =>
  createQuery(
    ["reviews", serviceId, count, page],
    () => apiHelper.getReviews(serviceId, count, page),
    {
      refetchOnWindowFocus: false,
    }
  );

export default useReviews;
