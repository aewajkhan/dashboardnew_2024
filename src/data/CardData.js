import {
  TbShoppingBagPlus,
  TbShoppingBagCheck,
  TbShoppingBagX,
} from "react-icons/tb";
import { LuArrowDownUp } from "react-icons/lu";
import { BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi";

const CardData = [
  {
    title: "Total Orders",
    value: "75",
    change: "3%",
    changeColor: "#03b480",
    icon: TbShoppingBagPlus,
    upicon: BiSolidUpArrow,

    backgroundColor: "#7195f4",
    color: "#405efa",
  },
  {
    title: "Total Delivered",
    value: "70",
    change: "3%",
    upicon: BiSolidDownArrow,
    changeColor: "#c34b4b",
    icon: TbShoppingBagCheck,
    backgroundColor: "#08805f",
    color: "#02c68b",
  },
  {
    title: "Total Cancelled",
    value: "05",
    change: "3%",
    changeColor: "#03b480",
    icon: TbShoppingBagX,
    backgroundColor: "#592c49",
    color: "#f15b5c",
    upicon: BiSolidUpArrow,

  },
  {
    title: "Total Revenue",
    value: "$12k",
    change: "3%",
    changeColor: "#c34b4b",
    icon: LuArrowDownUp,
    backgroundColor: "#5a2d4a",
    color: "#d64296",
    upicon: BiSolidDownArrow,
  },
];
export default CardData;
