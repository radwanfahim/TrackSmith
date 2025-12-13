import { TbLayoutSidebarLeftExpand } from "solid-icons/tb";
import { VsHome } from "solid-icons/vs";
import { For } from "solid-js";

const Dashboard = () => {
  const sidebarData = [
    {
      text: "Homepage",
      icon: VsHome,
    },
  ];
  return (
    <div class="drawer lg:drawer-open">
      <input id="dashboard-drawer" type="checkbox" class="drawer-toggle" />
      {/* page content */}
      <div class="drawer-content">
        <div class="p-4">{}</div>
      </div>

      <div class="drawer-side is-drawer-close:overflow-visible">
        <label
          for="dashboard-drawer"
          aria-label="close sidebar"
          class="drawer-overlay"
        ></label>
        <div class="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64">
          <ul class="menu w-full grow">
            {/* sidebar */}
            <For each={sidebarData}>
              {(sidebarData) => {
                const Icon = sidebarData?.icon;
                return (
                  <li>
                    <button
                      class="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                      data-tip={`${sidebarData?.text}`}
                    >
                      {/* icon */}
                      <Icon class="text-xl" />
                      <span class="is-drawer-close:hidden">
                        {sidebarData?.text}
                      </span>
                    </button>
                  </li>
                );
              }}
            </For>

            {/* expend side bar btn */}
            <li
              class="is-drawer-close:tooltip is-drawer-close:tooltip-right"
              data-tip={"Expend"}
            >
              <label
                for="dashboard-drawer"
                aria-label="open sidebar"
                class=" mb-3 btn btn-square btn-ghost w-full "
              >
                <TbLayoutSidebarLeftExpand class="text-xl" />
                <h1 class="is-drawer-close:hidden">Close</h1>
              </label>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
