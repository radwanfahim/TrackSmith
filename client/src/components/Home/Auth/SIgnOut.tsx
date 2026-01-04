import { VsSignOut } from "solid-icons/vs";

const SIgnOut = () => {
  return (
    <button class="is-drawer-open:btn is-drawer-open:hover:bg-red-500 w-full is-drawer-close:tooltip is-drawer-close:tooltip-right ml-2 is-drawer-open:hover:text-white">
      <label
        class=" flex is-drawer-close:tooltip is-drawer-close:tooltip-right items-center gap-2 cursor-pointer "
        data-tip={`Sign Out`}
      >
        <VsSignOut class="text-2xl" />
        <h1 class="is-drawer-close:hidden font-bold ">Sign Out</h1>
      </label>
    </button>
  );
};

export default SIgnOut;
