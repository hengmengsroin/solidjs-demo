import { createQuery } from "@tanstack/solid-query";
import { apiHelper } from "../services/api-helper";

const useOneTourist = (touristId: string) => {
  console.log({ touristId });
  return createQuery(
    () => ["tourist", touristId],
    () => apiHelper.getOneTourist(touristId),
    {
      refetchOnWindowFocus: false,
      enabled: touristId != "",
    }
  );
};

export default useOneTourist;
