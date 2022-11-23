import { createQuery } from "@tanstack/solid-query";
import { apiHelper } from "../services/api-helper";

const useServiceOptions = (serviceId: string) =>
  createQuery(
    ["service_options", serviceId],
    () => apiHelper.service.option_content(serviceId),
    {
      refetchOnWindowFocus: false,
    }
  );

export default useServiceOptions;
