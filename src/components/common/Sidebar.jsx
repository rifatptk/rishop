import {
  QueueListIcon,
  ShoppingBagIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const iconClass = "w-6";

const sidebarLinks = [
  {
    title: "Products",
    to: "/admin/products",
    icon: <ShoppingBagIcon className={iconClass} />,
  },
  {
    title: "Orders",
    to: "/admin/orders",
    icon: <QueueListIcon className={iconClass} />,
  },
  {
    title: "Customers",
    to: "/admin/customers",
    icon: <UserGroupIcon className={iconClass} />,
  },
];

export default function Sidebar() {
  const [selected, setselected] = useState(0);
  return (
    <div id="sidebar" className="">
      <div>
        <aside className="fixed top-[64px] left-0 z-40 w-[200px] h-screen transition-transform -translate-x-full sm:translate-x-0">
          <div className="h-full px-3 py-4 overflow-y-auto bg-gray-800 dark:bg-gray-800">
            <ul className="space-y-2">
              {sidebarLinks.map((link, i) => (
                <li key={link.title}>
                  <Link
                    to={link.to}
                    onClick={() => setselected(i)}
                    className={`flex items-center p-2 text-base font-normal text-gray-50 rounded-lg hover:bg-gray-700 ${
                      selected === i ? "bg-gray-700" : ""
                    }`}
                  >
                    {link.icon}
                    <span className="ml-3">{link.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
