import { useNavigate } from "@solidjs/router";
import { createResource, For, Match, Switch } from "solid-js";
import { activeProvince } from "../app.state";
import placeHolder from "../assets/images/no-pictures.png";
import { apiHelper } from "../services/api-helper";
const AttractionList = () => {
  const [query] = createResource(
    activeProvince,
    (id) => apiHelper.service.getAll(0, 1000, 1, 30, id, "", [], undefined),
    {
      name: "attractionList",
    }
  );

  return (
    <div class="w-full py-2">
      <div class="font-medium text-2xl py-2">Attraction List</div>
      <Switch>
        <Match when={query.loading}>
          <p>Loading...</p>
        </Match>
        <Match when={query.error}>
          <p>Error</p>
        </Match>
        <Match when={query.state == "ready"}>
          <div class="grid grid-cols-3 gap-2">
            <For each={query().data}>
              {(item: any) => {
                return <AttractionTile service={item}></AttractionTile>;
              }}
            </For>
          </div>
        </Match>
      </Switch>
    </div>
  );
};

function AttractionTile({ service }: any) {
  let { _id, name, merchant, price, thumbnails } = service;
  const navigate = useNavigate();
  function gotoDetail() {
    let serviceName = name.replaceAll(" ", "-");
    let url = "/services/" + _id + "-" + serviceName;
    navigate(url);
  }

  return (
    <div
      class={`flex flex-col  shadow-md rounded-md cursor-pointer `}
      onClick={gotoDetail}
    >
      <div class="h-[200px]">
        <img
          class="object-cover w-full h-full rounded-md"
          src={thumbnails[0] ?? placeHolder}
          alt={name}
        />
      </div>
      <div class="p-3 text-center text-blue-900 font-medium">{name}</div>
    </div>
  );
}

export default AttractionList;
