import { FiFilter } from "solid-icons/fi";
import Button from "../../../ui/Button";
import { For } from "solid-js";
import OrderFilterData from "../../../api/OrderFilterData";

const Filter = () => {
  return (
    <div class="mt-5 flex gap-3 items-center">
      <FiFilter class="text-xl text-gray-400" />

      <div class="flex gap-3 items-center justify-start">
        {
          <For each={OrderFilterData}>
            {(item) => (
              <Button
                icon=""
                text={item.text}
                style="bg-teal-100 text-teal-700 px-4 py-2 rounded-lg font-medium cursor-pointer"
              />
            )}
          </For>
        }
      </div>
    </div>
  );
};

export default Filter;
