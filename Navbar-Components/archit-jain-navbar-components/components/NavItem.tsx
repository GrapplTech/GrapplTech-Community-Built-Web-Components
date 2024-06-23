import React from "react";
import {
  Bell,
  BriefcaseBusinessIcon,
  Home,
  MessageCircleMore,
  User,
} from "lucide-react";

import Link from "next/link";
// type NAVITEM = {
//   src: string;
//   icon: JSX.Element;
//   // text: string;
// };
const item = [
  {
    src: "/home",
    icon: <Home></Home>,
    text: "Home",
  },
  {
    src: "/user",
    icon: <User></User>,
    text: "My Network",
  },
  {
    src: "/job",
    icon: <BriefcaseBusinessIcon></BriefcaseBusinessIcon>,
    text: "My Network",
  },
  {
    src: "/message",
    icon: <MessageCircleMore></MessageCircleMore>,
    text: "Message",
  },
  {
    src: "/notification",
    icon: <Bell></Bell>,
    text: "Notification",
  },
];

const NavItem = () => {
  return (
    <div className="flex gap-8">
      {item.map((items, index) => {
        return (
          <div
            key={index}
            className="flex flex-col items-center text-[#666666] hover:text-black"
          >
            <span>{items.icon}</span>
            <Link href={items.src} className="text-xs">
              {items.text}
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default NavItem;
