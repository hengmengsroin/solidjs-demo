import { useRouteData } from "@solidjs/router";
import { Match, Switch } from "solid-js";

export default function ServiceDetailPage() {
  const serviceRes = useRouteData<any>();
  return (
    <div class="w-full py-2">
      <Switch>
        <Match when={serviceRes.loading}>
          <p>Loading...</p>
        </Match>
        <Match when={serviceRes.error}>
          <p>Error</p>
        </Match>
        <Match when={serviceRes.state == "ready"}>
          <div class="w-full flex flex-col items-center gap-2 py-1 overflow-x-auto">
            <div class="w-full h-[500px]">
              <img
                src={serviceRes().thumbnails[0]}
                alt="thumbnail"
                class="h-full w-full object-cover"
              />
            </div>
            <div class="text-xl font-medium p-2 bg-red-100">
              {serviceRes().name}
            </div>
            <div class="text-ellipsis font-medium text-red-200 bg-blue-500 p-3 rounded-sm border-r-amber-100">
              {serviceRes().merchant.name}
            </div>
            <div>{serviceRes().overall_rating.overall}</div>
          </div>
        </Match>
      </Switch>
    </div>
  );
}
