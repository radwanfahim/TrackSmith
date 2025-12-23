import { FaSolidCreditCard, FaSolidDollarSign } from "solid-icons/fa";
import { FiPackage, FiTrendingUp } from "solid-icons/fi";

interface HomeDashCardData {
  ico: Function;
  text: string;
  icoStyle: string;
  icoStyleBg: string;
}

const HomeDashCardData: HomeDashCardData[] = [
  {
    text: "Today's Orders",
    ico: FiPackage,
    icoStyle: "text-teal-600",
    icoStyleBg: "bg-teal-100",
  },
  {
    text: "Revenue",
    ico: FaSolidDollarSign,
    icoStyle: "text-green-600",
    icoStyleBg: "bg-teal-100",
  },
  {
    text: "Profit",
    ico: FiTrendingUp,
    icoStyle: "text-blue-600",
    icoStyleBg: "bg-blue-100",
  },
  {
    text: "Pending COD",
    ico: FaSolidCreditCard,
    icoStyle: "text-orange-600",
    icoStyleBg: "bg-orange-100",
  },
];

export default HomeDashCardData;
