import { createEffect, For, Match, Switch } from "solid-js";
import { activeProvince, setActiveProvince } from "../app.state";
import useProvinces from "../hooks/useProvinces";

export default function ProvinceList() {
  let provinceList = useProvinces();

  return (
    <div class="w-full py-2">
      <Switch>
        <Match when={provinceList.isLoading}>
          <p>Loading...</p>
        </Match>
        <Match when={provinceList.isError}>
          <p>Error</p>
        </Match>
        <Match when={provinceList.isSuccess}>
          <div class="w-full flex flex-row items-center  gap-2 py-1 overflow-x-auto">
            <For each={provinceList.data?.data}>
              {(item) => {
                console.log({ item });
                return (
                  <ProvinceTile
                    name={item.name}
                    image={item.thumbnail}
                    _id={item._id}
                  ></ProvinceTile>
                );
              }}
            </For>
          </div>
        </Match>
      </Switch>
    </div>
  );
}

type ProvinceTileProp = {
  _id: string;
  name: string;
  image: string;
};
function ProvinceTile({ name, _id, image }: ProvinceTileProp) {
  function selectProvince() {
    setActiveProvince(_id);
  }
  return (
    <div
      class={`flex flex-col  shadow-md   cursor-pointer  ${
        activeProvince() == _id ? "border-solid border-2 border-blue-500" : ""
      }`}
      onClick={selectProvince}
    >
      <div class="h-[80px]">
        <img class="object-cover w-full h-full " src={image} alt={name} />
      </div>
      <div class="p-2 text-center">{name}</div>
    </div>
  );
}
