import { For, Match, Switch } from "solid-js";
import useProvinces from "../hooks/useProvinces";

export default function ProvinceList() {
  let provinceList = useProvinces();

  return (
    <div>
      <Switch>
        <Match when={provinceList.isLoading}>
          <p>Loading...</p>
        </Match>
        <Match when={provinceList.isError}>
          <p>Error</p>
        </Match>
        <Match when={provinceList.isSuccess}>
          <For each={provinceList.data}>
            {(todo: any) => <p>{todo.name}</p>}
          </For>
        </Match>
      </Switch>
    </div>
  );
}
