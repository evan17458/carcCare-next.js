import { z } from "zod";

export const UserFormValidation = z.object({
  name: z
    .string()
    .min(2, "名稱必須至少有 2 個字符")
    .max(20, "名稱不得超過 20 個字符"),
  email: z.string().email("電子郵件地址無效"),
  phone: z
    .string()
    .refine((phone) => /^\+\d{10,15}$/.test(phone), "電話號碼無效"),
});
//  z.string() 表示這個字段的類型必須是字符串。
// refine() 方法接受兩個參數：
// 第一個參數是一個回調函數 (phone)，用來定義自定義的驗證邏輯。
// 在這裡，我們使用正則表達式 /^\+\d{10,15}$/ 來驗證電話號碼的格式。
// 這個正則表達式的意思是，電話號碼必須以「+」號開頭，後面跟著 10 到 15 位數字。
// 第二個參數是當驗證失敗時的錯誤信息 "電話號碼無效"，
// 即當電話號碼不符合正則表達式的要求時，將會返回此錯誤提示。

// 54:58
export const PatientFormValidation = z.object({
  name: z
    .string()
    .min(2, "姓名必須至少有 2 個字")
    .max(7, "姓名不得超過 7 個字"),
  email: z.string().email("電子郵件地址無效"),
  phone: z
    .string()
    .refine((phone) => /^\+\d{10,15}$/.test(phone), "電話號碼無效"),
  birthDate: z.coerce.date(),
  gender: z.enum(["男", "女", "其它"]),
  address: z
    .string()
    .min(10, "地址必須至少為 10 個字")
    .max(20, "地址不得超過 20 個字"),
  occupation: z
    .string()
    .min(2, "職業必須至少有 2 個字")
    .max(10, "職業最多 10 個字"),
  emergencyContactName: z
    .string()
    .min(2, "聯絡人姓名必須至少 2 個字")
    .max(10, "聯絡人姓名不得超過 10 個字"),
  emergencyContactNumber: z
    .string()
    .refine(
      (emergencyContactNumber) => /^\+\d{10,15}$/.test(emergencyContactNumber),
      "電話號碼無效"
    ),
  primaryPhysician: z.string().min(2, "選擇至少一位"),
  insuranceProvider: z
    .string()
    .min(2, "保險名稱必須至少有 2 個字")
    .max(10, "保險名稱不得超過 10 個字"),
  insurancePolicyNumber: z
    .string()
    .min(2, "保單號碼必須至少為 2 個字")
    .max(10, "保單號碼不得超過 10 個字"),
  allergies: z.string().optional(),
  currentMedication: z.string().optional(),
  familyMedicalHistory: z.string().optional(),
  pastMedicalHistory: z.string().optional(),
  identificationType: z.string().optional(),
  identificationNumber: z.string().optional(),
  identificationDocument: z.custom<File[]>().optional(),
  treatmentConsent: z
    .boolean()
    .default(false)
    .refine((value) => value === true, {
      message: "您必須同意維修才能繼續",
    }),
  disclosureConsent: z
    .boolean()
    .default(false)
    .refine((value) => value === true, {
      message: "您必須同意披露才能繼續",
    }),
  privacyConsent: z
    .boolean()
    .default(false)
    .refine((value) => value === true, {
      message: "您必須同意隱私權才能繼續",
    }),
});

export const CreateAppointmentSchema = z.object({
  primaryPhysician: z.string().min(2, "選擇至少一位"),
  schedule: z.coerce.date(),
  reason: z
    .string()
    .min(2, "原因必須至少2個字")
    .max(500, "原因不得超過 500 個字"),
  note: z.string().optional(),
  cancellationReason: z.string().optional(),
});

export const ScheduleAppointmentSchema = z.object({
  primaryPhysician: z.string().min(2, "選擇至少一位"),
  schedule: z.coerce.date(),
  reason: z.string().optional(),
  note: z.string().optional(),
  cancellationReason: z.string().optional(),
});

export const CancelAppointmentSchema = z.object({
  primaryPhysician: z.string().min(2, "選擇至少一位"),
  schedule: z.coerce.date(),
  reason: z.string().optional(),
  note: z.string().optional(),
  cancellationReason: z
    .string()
    .min(2, "原因必須至少 2 個字")
    .max(500, "原因不得超過 500 個字"),
});

export function getAppointmentSchema(type: string) {
  switch (type) {
    case "create":
      return CreateAppointmentSchema;
    case "cancel":
      return CancelAppointmentSchema;
    default:
      return ScheduleAppointmentSchema;
  }
}
// 2:52:05
