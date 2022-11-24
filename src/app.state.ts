import { createSignal } from "solid-js";

const [activeProvince, setActiveProvince] = createSignal("all");

export { activeProvince, setActiveProvince };
