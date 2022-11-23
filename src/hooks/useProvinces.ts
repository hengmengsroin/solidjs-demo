import { createQuery } from "@tanstack/solid-query";
import { apiHelper } from "../services/api-helper";

const useProvinces = () =>
  createQuery(
    () => ["provinces"],
    () => apiHelper.getProvinces(),
    {
      refetchOnWindowFocus: false,
      refetchOnMount: true,
    }
  );

export default useProvinces;
