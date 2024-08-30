export const GenderOptions = ["male", "female", "other"];

export const PatientFormDefaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  birthDate: new Date(Date.now()),
  gender: "male" as Gender,
  address: "",
  occupation: "",
  emergencyContactName: "",
  emergencyContactNumber: "",
  primaryPhysician: "",
  insuranceProvider: "",
  insurancePolicyNumber: "",
  allergies: "",
  currentMedication: "",
  familyMedicalHistory: "",
  pastMedicalHistory: "",
  identificationType: "Birth Certificate",
  identificationNumber: "",
  identificationDocument: [],
  treatmentConsent: false,
  disclosureConsent: false,
  privacyConsent: false,
};

export const IdentificationTypes = [
  "購車證明",
  "駕駛執照",
  "汽車保險單",
  "車主身份證",
  "車主證件",
  "國際駕照",
  "進口車輛合格證",
  "車輛安全檢查證明",
  "購車貸款證明",
  "地方車管所證件",
  "汽車登記號碼",
];

export const Doctors = [
  {
    image: "/assets/images/dr-green.png",
    name: "王建綸",
  },
  {
    image: "/assets/images/dr-cameron.png",
    name: "林佳蓉",
  },
  {
    image: "/assets/images/dr-livingston.png",
    name: "李大維",
  },
  {
    image: "/assets/images/dr-peter.png",
    name: "陳奕凡",
  },
  {
    image: "/assets/images/dr-powell.png",
    name: "陳靜雯",
  },
  {
    image: "/assets/images/dr-remirez.png",
    name: "林承恩",
  },
  {
    image: "/assets/images/dr-lee.png",
    name: "李茉莉",
  },
  {
    image: "/assets/images/dr-cruz.png",
    name: "張雅涵",
  },
  {
    image: "/assets/images/dr-sharma.png",
    name: "黃子維",
  },
];

export const StatusIcon = {
  scheduled: "/assets/icons/check.svg",
  pending: "/assets/icons/pending.svg",
  cancelled: "/assets/icons/cancelled.svg",
};
