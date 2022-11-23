import { createQuery } from "@tanstack/solid-query";
import { apiHelper } from "../services/api-helper";

const useOneService = (serviceId: string) =>
  createQuery(
    () => ["service", serviceId],
    () => apiHelper.service.getOne(serviceId),
    {
      refetchOnWindowFocus: false,
    }
  );

export default useOneService;
