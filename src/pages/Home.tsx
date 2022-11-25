import AttractionList from "../components/AttractionList";
import PromotionList from "../components/PromotionList";
import ProvinceList from "../components/ProvinceList";

export default function HomePage() {
  return (
    <div class="h-full">
      <ProvinceList />
      <PromotionList />
      <AttractionList />
    </div>
  );
}
