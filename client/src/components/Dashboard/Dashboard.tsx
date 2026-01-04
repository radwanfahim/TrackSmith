import { useLocation, useNavigate } from "@solidjs/router";
import { TbLayoutSidebarLeftExpand } from "solid-icons/tb";
import { createSignal, For, Show } from "solid-js";
import SidebarData from "../../api/SideBarData";
import SIgnOut from "../Home/Auth/SIgnOut";

const Dashboard = (props: any) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isNavigating, setIsNavigating] = createSignal(false);

  const handleNavigation = (link: string) => {
    setIsNavigating(true);
    navigate(link);
    setTimeout(() => setIsNavigating(false), 100);
  };

  return (
    <div class="drawer lg:drawer-open">
      <input id="dashboard-drawer" type="checkbox" class="drawer-toggle" />

      {/* page content */}
      <div class="drawer-content relative mr-10">
        {/* layout */}
        <Show when={location.pathname && isNavigating} keyed>
          <section class="ml-10 mt-5">{props.children}</section>
        </Show>
      </div>

      <div class="drawer-side is-drawer-close:overflow-visible">
        <label
          for="dashboard-drawer"
          aria-label="close sidebar"
          class="drawer-overlay"
        ></label>
        <div class="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64">
          <ul class="menu w-full grow">
            {/* expend side bar btn */}
            <div class="is-drawer-close:tooltip is-drawer-close:tooltip-right mt-2 ml-3 ">
              <label
                for="dashboard-drawer"
                aria-label="open sidebar"
                class=" flex tooltip tooltip-right items-center gap-2 cursor-pointer is-drawer-open:hover:text-red-600"
                data-tip={`Expend`}
              >
                <TbLayoutSidebarLeftExpand class="text-2xl" />
                <h1 class="is-drawer-close:hidden font-bold">Close</h1>

                {/* <h1 class="is-drawer-close:hidden">Close</h1> */}
              </label>
            </div>

            {/* sidebar */}
            <For each={SidebarData}>
              {(sidebarData) => {
                const Icon = sidebarData?.icon;
                const isActive = () => location.pathname === sidebarData.link;
                return (
                  <li>
                    <button
                      onClick={() => handleNavigation(sidebarData.link)}
                      class={`flex tooltip tooltip-right items-center gap-3 rounded-lg mt-2  py-3 transition-colors ${
                        isActive()
                          ? "text-teal-600 hover:text-teal-700 font-bold hover:scale-[1.02] active:scale-[0.98] shadow-lg"
                          : "hover:bg-gray-200"
                      }`}
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

            {/* sign out */}
            <div class="absolute bottom-5 is-drawer-close:w-[80%] w-[90%]">
              <div class="divider"></div>
              <SIgnOut />
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
