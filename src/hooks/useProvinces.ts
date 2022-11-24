import { createQuery } from "@tanstack/solid-query";
import { apiHelper } from "../services/api-helper";

const useProvinces = () =>
  createQuery<DataRes>(
    () => ["provinces"],
    () => apiHelper.getProvinces(),
    {
      refetchOnWindowFocus: false,
      refetchOnMount: true,
    }
  );

export default useProvinces;
type Province = {
  _id: string;
  name: string;
  kh_name: string;
  thumbnail: string;
};

type DataRes = {
  data: Province[];
  pagination: any;
};
