import clsx from "clsx";
import Image from "next/image";

import { StatusIcon } from "@/constants";

export const StatusBadge = ({ status }: { status: Status }) => {
  return (
    <div
      className={clsx("status-badge", {
        "bg-green-600": status === "scheduled",
        "bg-blue-600": status === "pending",
        "bg-red-600": status === "cancelled",
      })}
    >
      <Image
        src={StatusIcon[status]}
        alt="doctor"
        width={24}
        height={24}
        className="h-fit w-3"
      />
      <p
        className={clsx("text-12-semibold capitalize", {
          "text-green-500": status === "scheduled",
          "text-blue-500": status === "pending",
          "text-red-500": status === "cancelled",
        })}
      >
        {status}
      </p>
    </div>
  );
};
// 04:03:40
// 如果不使用 clsx，你可以使用 JavaScript 的条件运算符和模板字符串来实现同样的功能。
// 以下是不用 clsx 的原始写法：
//  className={`status-badge ${
//     status === "scheduled"
//       ? "bg-green-600"
//       : status === "pending"
//       ? "bg-blue-600"
//       : status === "cancelled"
//       ? "bg-red-600"
//       : ""
//   }`}
