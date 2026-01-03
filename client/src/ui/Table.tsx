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
                    <tr class="">
                      <For each={value}>
                        {(val: any, index) => {
                          // index
                          const isPayment = index() === 5;
                          const isStatus = index() === 6;
                          // font weight logic
                          const isFontBold =
                            index() === 0 || index() === 3 ? "font-bold" : "";
                          const isProfit =
                            index() === 4 ? "text-green-600 font-bold" : "";

                          //  payment color logic
                          let paymentColor = "";
                          if (isPayment) {
                            if (val === "Pending")
                              paymentColor =
                                "text-yellow-200 font-semibold bg-yellow-500 text-center ";
                            if (val === "Paid")
                              paymentColor =
                                "text-green-200 font-semibold bg-green-500 text-center ";
                            if (val === "COD")
                              paymentColor =
                                "text-orange-200 font-semibold bg-orange-500 text-center ";
                            if (val === "Refunded")
                              paymentColor =
                                "text-red-200 font-semibold bg-red-500 text-center ";
                          }

                          // status color logic
                          let statusColor = "";
                          if (isStatus) {
                            if (val === "Delivered")
                              statusColor =
                                "text-green-200 bg-green-500 font-semibold text-center ";
                            if (val === "Shipped")
                              statusColor =
                                "text-blue-200 bg-blue-500 font-semibold text-center ";
                            if (val === "Processing")
                              statusColor =
                                "text-yellow-200 bg-yellow-500 font-semibold text-center ";
                            if (val === "Cancelled")
                              statusColor =
                                "text-red-200 bg-red-500 font-semibold ";
                          }

                          return (
                            <td class={`${isFontBold} ${isProfit} `}>
                              {isPayment || isStatus ? (
                                <span
                                  class={`badge py-3 w-full ${
                                    isPayment ? paymentColor : statusColor
                                  }`}
                                >
                                  {val}
                                </span>
                              ) : (
                                <>{typeof val === "number" ? `$${val}` : val}</>
                              )}
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
