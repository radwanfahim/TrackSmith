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
                  const value = Object.values(t);

                  return (
                    <tr>
                      <For each={value}>
                        {(val: any, index) => {
                          // index
                          const isPayment = index() === 5;

                          //  payment color logic
                          let paymentColor = "";
                          if (isPayment) {
                            if (val === "Online")
                              paymentColor = "text-blue-600 font-semibold";
                            if (val === "Paid")
                              paymentColor = "text-green-600 font-semibold";
                            if (val === "COD")
                              paymentColor = "text-red-600 font-semibold";
                          }
                          return (
                            <td
                              class={`${index() === 0 ? "font-bold" : ""} ${
                                index() === 3 && typeof val === "number"
                                  ? "font-bold"
                                  : ""
                              } ${
                                index() === 4 && typeof val === "number"
                                  ? "text-green-600 font-bold"
                                  : ""
                              } ${paymentColor}`}
                            >
                              {typeof val === "number" ? `$${val}` : val}
                            </td>
                          );
                        }}
                      </For>
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
