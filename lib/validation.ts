import { z } from "zod";
const allowedCountryCodes = [
  "+20",
  "+27",
  "+30",
  "+31",
  "+32",
  "+33",
  "+34",
  "+36",
  "+40",
  "+41",
  "+43",
  "+44",
  "+45",
  "+46",
  "+48",
  "+49",
  "+51",
  "+52",
  "+53",
  "+54",
  "+55",
  "+56",
  "+57",
  "+58",
  "+60",
  "+61",
  "+62",
  "+63",
  "+64",
  "+65",
  "+66",
  "+81",
  "+82",
  "+84",
  "+86",
  "+90",
  "+91",
  "+92",
  "+93",
  "+94",
  "+95",
  "+98",
  "+213",
  "+216",
  "+218",
  "+220",
  "+221",
  "+222",
  "+223",
  "+224",
  "+225",
  "+226",
  "+227",
  "+228",
  "+229",
  "+230",
  "+231",
  "+232",
  "+233",
  "+234",
  "+235",
  "+236",
  "+237",
  "+238",
  "+239",
  "+240",
  "+241",
  "+242",
  "+243",
  "+244",
  "+245",
  "+246",
  "+247",
  "+248",
  "+249",
  "+250",
  "+251",
  "+252",
  "+253",
  "+254",
  "+255",
  "+256",
  "+257",
  "+258",
  "+260",
  "+261",
  "+262",
  "+263",
  "+264",
  "+265",
  "+266",
  "+267",
  "+268",
  "+269",
  "+290",
  "+291",
  "+297",
  "+298",
  "+299",
  "+350",
  "+351",
  "+352",
  "+353",
  "+354",
  "+355",
  "+356",
  "+357",
  "+358",
  "+359",
  "+370",
  "+371",
  "+372",
  "+373",
  "+374",
  "+375",
  "+376",
  "+377",
  "+378",
  "+379",
  "+380",
  "+381",
  "+382",
  "+383",
  "+385",
  "+386",
  "+387",
  "+389",
  "+420",
  "+421",
  "+423",
  "+500",
  "+501",
  "+502",
  "+503",
  "+504",
  "+505",
  "+506",
  "+507",
  "+508",
  "+509",
  "+590",
  "+591",
  "+592",
  "+593",
  "+594",
  "+595",
  "+596",
  "+597",
  "+598",
  "+599",
  "+670",
  "+672",
  "+673",
  "+674",
  "+675",
  "+676",
  "+677",
  "+678",
  "+679",
  "+680",
  "+681",
  "+682",
  "+683",
  "+685",
  "+686",
  "+687",
  "+688",
  "+689",
  "+690",
  "+691",
  "+692",
  "+850",
  "+852",
  "+853",
  "+855",
  "+856",
  "+880",
  "+886",
  "+960",
  "+961",
  "+962",
  "+963",
  "+964",
  "+965",
  "+966",
  "+967",
  "+968",
  "+970",
  "+971",
  "+972",
  "+973",
  "+974",
  "+975",
  "+976",
  "+977",
  "+992",
  "+993",
  "+994",
  "+995",
  "+996",
  "+998",
];
export const UserFormValidation = z.object({
  name: z
    .string()
    .min(2, "名稱必須至少有 2 個字符")
    .max(20, "名稱不得超過 20 個字符"),
  email: z.string().email("電子郵件地址無效"),
  phone: z
    .string()
    .refine((phone) => /^\+\d{10,15}$/.test(phone), "電話號碼無效")
    .refine(
      (phone) => allowedCountryCodes.some((code) => phone.startsWith(code)),
      "電話號碼必須加上有效的國際代碼"
    ),
});
//  z.string() 表示這個字段的類型必須是字符串。
// refine() 方法接受兩個參數：
// 第一個參數是一個回調函數 (phone)，用來定義自定義的驗證邏輯。
// 在這裡，我們使用正則表達式 /^\+\d{10,15}$/ 來驗證電話號碼的格式。
// 這個正則表達式的意思是，電話號碼必須以「+」號開頭，後面跟著 10 到 15 位數字。
// 第二個參數是當驗證失敗時的錯誤信息 "電話號碼無效"，
// 即當電話號碼不符合正則表達式的要求時，將會返回此錯誤提示。

// 54:58
export const DetailFormValidation = z.object({
  name: z
    .string()
    .min(2, "姓名必須至少有 2 個字")
    .max(7, "姓名不得超過 7 個字"),
  email: z.string().email("電子郵件地址無效"),
  phone: z
    .string()
    .refine((phone) => /^\+\d{10,15}$/.test(phone), "電話號碼無效")
    .refine(
      (phone) => allowedCountryCodes.some((code) => phone.startsWith(code)),
      "電話號碼必須加上有效的國際代碼"
    ),
  birthDate: z.coerce.date(),
  gender: z.enum(["男", "女", "其它"]),
  address: z.string().min(6, "地址必須至少6個字").max(20, "地址不得超過20個字"),
  occupation: z.string().min(2, "職業必須至少2個字").max(10, "職業最多10個字"),
  emergencyContactName: z
    .string()
    .min(2, "緊急通知人姓名必須至少2個字")
    .max(10, "緊急通知人姓名不得超過10個字"),
  emergencyContactNumber: z
    .string()
    .refine(
      (emergencyContactNumber) => /^\+\d{10,15}$/.test(emergencyContactNumber),
      "電話號碼無效"
    )
    .refine(
      (phone) => allowedCountryCodes.some((code) => phone.startsWith(code)),
      "電話號碼必須加上有效的國際代碼"
    ),
  primaryPhysician: z.string().min(2, "選擇至少一位"),
  insuranceProvider: z
    .string()
    .min(3, "車型品牌至少3個字")
    .max(20, "車型品牌不得超過20個字"),
  insurancePolicyNumber: z
    .string()
    .min(6, "車牌號碼必須至少6個字")
    .max(20, "車牌號碼不得超過20個字"),
  allergies: z.string().optional(),
  currentMedication: z.string().optional(),
  familyMedicalHistory: z.string().optional(),
  pastMedicalHistory: z.string().optional(),
  identificationType: z.string().min(1, "必選"),
  identificationNumber: z.string().min(1, "必填"),
  identificationDocument: z.custom<File[]>((value) => {
    return (
      Array.isArray(value) &&
      value.length > 0 &&
      value.every((item) => item instanceof File)
    );
  }, "必須上傳文件"),
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
