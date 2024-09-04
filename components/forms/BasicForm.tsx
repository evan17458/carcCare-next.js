"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Form } from "@/components/ui/form";
import { createUser } from "@/lib/actions/patient.actions";
import { UserFormValidation } from "@/lib/validation";

import "react-phone-number-input/style.css";
import CustomFormField, { FormFieldType } from "../CustomFormField";
import SubmitButton from "../SubmitButton";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
export const BasicForm = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const form = useForm<z.infer<typeof UserFormValidation>>({
    resolver: zodResolver(UserFormValidation),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof UserFormValidation>) => {
    setIsLoading(true);
    try {
      const user = {
        name: values.name,
        email: values.email,
        phone: values.phone,
      };
      // 58:06
      const newUser = await createUser(user);
      // 1:16:51
      // 如何newUser沒拿到,因為系統發現已經存在具有相同 ID、電子郵件或電話號碼的使用者
      if (newUser) {
        router.push(`/patients/${newUser.$id}/register`);
        // 1:21:11
        // 跳到register頁面後 const -->Register
        // 會檢查user = await getUser(userId);
        // 如果有的話,redirect(`/patients/${userId}/new-appointment`);
      } else {
        setOpen(true);
      }
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex-1 space-y-6">
        <section className="mb-12 space-y-4">
          <p
            className="text-transparent font-extrabold"
            style={{
              background: "linear-gradient(to right, #a1c4fd, #c2e9fb)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
            }}
          >
            建立或查詢基本資料
          </p>
        </section>

        <CustomFormField
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name="name"
          label="姓名"
          placeholder="陳建明"
          iconSrc="/assets/icons/user.svg"
          iconAlt="user"
        />

        <CustomFormField
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name="email"
          label="電子郵件"
          placeholder="evansheng@gmail.com"
          iconSrc="/assets/icons/email.svg"
          iconAlt="email"
        />

        <CustomFormField
          fieldType={FormFieldType.PHONE_INPUT}
          control={form.control}
          name="phone"
          label="電話號碼"
          placeholder="(555) 123-4567"
        />

        <SubmitButton isLoading={isLoading}>開始使用</SubmitButton>
      </form>

      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="text-center">
              系統發現已經存在具有相同 ID、電子郵件或電話號碼的使用者
            </AlertDialogTitle>
            <button
              onClick={() => setOpen(false)}
              className="absolute -top-2 right-2 text-gray-400 hover:text-gray-600"
            >
              x
            </button>
          </AlertDialogHeader>
        </AlertDialogContent>
      </AlertDialog>
    </Form>
  );
};
