import { FaTasks } from "react-icons/fa";
import { IoHomeSharp } from "react-icons/io5";
import { IoMdDoneAll } from "react-icons/io";
import { MdIncompleteCircle } from "react-icons/md";

export const sidebarMenu = [
  {
    id: 1,
    title: "All Tasks",
    icon: IoHomeSharp,
    link: "/dashboard",
  },
  {
    id: 2,
    title: "Important!",
    icon: FaTasks,
    link: "/dashboard/important",
  },
  {
    id: 3,
    title: "Completed!",
    icon: IoMdDoneAll,
    link: "/dashboard/completed",
  },
  {
    id: 4,
    title: "Do It Now",
    icon: MdIncompleteCircle,
    link: "/dashboard/incomplete",
  },
];


