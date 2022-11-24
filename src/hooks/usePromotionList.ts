import { createQuery } from "@tanstack/solid-query";
import { apiHelper } from "../services/api-helper";

interface UseCollectionsQuery {
  provinceId?: string;
}

interface Response {
  data: any[];
  pagination: any;
}

const usePromotionList = ({ provinceId }: UseCollectionsQuery) =>
  createQuery<Response>(
    () => ["promotionSlider", provinceId],
    () => apiHelper.getPromotionSlides(provinceId),
    {
      enabled: provinceId != null,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    }
  );

export default usePromotionList;
