import { AiTwotoneShopping } from "solid-icons/ai";
import { VsHome } from "solid-icons/vs";
import { FiUsers } from "solid-icons/fi";

const SidebarData = [
  {
    text: "Homepage",
    icon: VsHome,
    link: "/dashboard/home",
  },
  {
    text: "Orders",
    icon: AiTwotoneShopping,
    link: "/dashboard/orders",
  },
  {
    text: "Customers",
    icon: FiUsers,
    link: "/dashboard/customers",
  },
];

export default SidebarData;
