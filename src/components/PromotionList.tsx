import { createResource, For, Match, Switch } from "solid-js";
import { activeProvince } from "../app.state";
import placeHolder from "../assets/images/no-pictures.png";
import { apiHelper } from "../services/api-helper";
const PromotionList = () => {
  const [query] = createResource(
    activeProvince,
    (id) => apiHelper.getPromotionSlides(id),
    {
      name: "promotionList",
    }
  );

  return (
    <div class="w-full py-2">
      <Switch>
        <Match when={query.loading}>
          <p>Loading...</p>
        </Match>
        <Match when={query.error}>
          <p>Error</p>
        </Match>
        <Match when={query.state == "ready"}>
          <div class="w-full flex flex-row items-center  gap-2 py-1 overflow-x-auto">
            <For each={query().data}>
              {(item: any) => {
                return (
                  <div class="rounded-md aspect-[3/2] h-[200px] shadow-grey-300 shadow-md mx-[2px]">
                    <img
                      class="w-full h-full object-cover rounded-md"
                      src={item.thumbnail ?? placeHolder}
                      alt={item.name}
                    />
                  </div>
                );
              }}
            </For>
          </div>
        </Match>
      </Switch>
    </div>
  );
};

export default PromotionList;
