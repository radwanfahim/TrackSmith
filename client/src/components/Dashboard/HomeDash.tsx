import { For } from "solid-js";
import Card from "../../ui/Card";
import HomeDashCardData from "../../api/HomeDashCardData";

const HomeDash = () => {
  return (
    <div>
      <div>
        {/* text */}
        <div>
          <h1 class="text-3xl font-bold text-gray-700">Dashboard</h1>
          <p class="capitalize text-gray-700 mt-2">performance overview</p>
        </div>

        <div>
          <button></button>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <For each={HomeDashCardData}>{(item) => <Card {...item} />}</For>
      </div>
    </div>
  );
};

export default HomeDash;
