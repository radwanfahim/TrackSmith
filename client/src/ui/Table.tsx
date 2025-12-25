import { For } from "solid-js";

const Table = (props: any) => {
  const columns = props[0];
  const rows = props[1];

  return (
    <div class="mt-5 mb-10">
      <div class="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
        <table class="table">
          <thead>
            <tr class="bg-teal-50">
              <For each={rows}>
                {(t) => {
                  return <th class="capitalize">{t.value}</th>;
                }}
              </For>
            </tr>
          </thead>
          <tbody>
            {
              <For each={columns}>
                {(t) => {
                  console.log(t);

                  return (
                    <tr>
                      <td>Cy Ganderton</td>
                      <td>Cy Ganderton</td>
                      <td>Cy Ganderton</td>
                    </tr>
                  );
                }}
              </For>
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
