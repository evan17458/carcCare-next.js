"use client";

import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";

import { technicians } from "@/constants";
import { formatDateTime } from "@/lib/utils";
import { Appointment } from "@/types/appwrite.types";

import { AppointmentModal } from "../AppointmentModal";
import { StatusBadge } from "../StatusBadge";

// 管理員儀表板
export const columns: ColumnDef<Appointment>[] = [
  {
    header: "#",
    cell: ({ row }) => {
      return <p className="text-14-medium ">{row.index + 1}</p>;
    },
  },
  // 04:00:23
  {
    accessorKey: "patient",
    header: "顧客",
    cell: ({ row }) => {
      const appointment = row.original;
      return <p className="text-14-medium ">{appointment?.patient?.name}</p>;
    },
  },
  {
    accessorKey: "status",
    header: "狀態",
    cell: ({ row }) => {
      const appointment = row.original;
      return (
        <div className="min-w-[115px]">
          <StatusBadge status={appointment.status} />
        </div>
      );
    },
  },
  {
    accessorKey: "schedule",
    header: "預約",
    cell: ({ row }) => {
      const appointment = row.original;
      return (
        <p className="text-14-regular min-w-[100px]">
          {formatDateTime(appointment.schedule).dateTime}
        </p>
      );
    },
  },
  {
    accessorKey: "primaryPhysician",
    header: "維修技師",
    cell: ({ row }) => {
      const appointment = row.original;

      const technician = technicians.find(
        (technician) => technician.name === appointment.primaryPhysician
      );

      return (
        <div className="flex items-center gap-3">
          <Image
            src={technician?.image!}
            alt="technician"
            width={100}
            height={100}
            className="size-8"
          />
          <p className="whitespace-nowrap"> {technician?.name} </p>
        </div>
      );
    },
  },
  {
    id: "actions",
    header: () => <div className="pl-4">操作</div>,
    cell: ({ row }) => {
      const appointment = row.original;

      return (
        <div className="flex gap-1">
          <AppointmentModal
            patientId={appointment.patient?.$id}
            userId={appointment.userId}
            appointment={appointment}
            type="schedule"
          />
          <AppointmentModal
            patientId={appointment.patient?.$id}
            userId={appointment.userId}
            appointment={appointment}
            type="cancel"
          />
        </div>
      );
    },
  },
];
// 03:56:54
