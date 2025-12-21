import { A } from "@solidjs/router";
import { TbLayoutSidebarLeftExpand } from "solid-icons/tb";
import { VsHome } from "solid-icons/vs";
import { For } from "solid-js";

const Dashboard = (props: any) => {
  const sidebarData = [
    {
      text: "Homepage",
      icon: VsHome,
      link: "/dashboard/home",
    },
  ];
  return (
    <div class="drawer lg:drawer-open">
      <input id="dashboard-drawer" type="checkbox" class="drawer-toggle" />

      {/* page content */}
      <div class="drawer-content relative">
        {/* expend side bar btn */}
        <div class="is-drawer-close:tooltip is-drawer-close:tooltip-right absolute top-3 ">
          <label
            for="dashboard-drawer"
            aria-label="open sidebar"
            class=" flex items-center gap-2 cursor-pointer"
          >
            <TbLayoutSidebarLeftExpand class="text-2xl" />
            {/* <h1 class="is-drawer-close:hidden">Close</h1> */}
          </label>
        </div>
        <section class="ml-10 mt-5">{props.children}</section>
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
                    <A
                      href={sidebarData?.link}
                      class="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                      data-tip={`${sidebarData?.text}`}
                    >
                      {/* icon */}
                      <Icon class="text-xl" />
                      <span class="is-drawer-close:hidden">
                        {sidebarData?.text}
                      </span>
                    </A>
                  </li>
                );
              }}
            </For>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
