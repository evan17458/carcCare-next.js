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
  "出生證明",
  "駕駛執照",
  "醫療保險卡/保單",
  "軍人身份證",
  "國民身分證",
  "護照",
  "永久居民卡（綠卡）",
  "社會安全卡",
  "州身分證",
  "學生證",
  "選民身份證",
];

export const Doctors = [
  {
    image: "/assets/images/dr-green.png",
    name: "約翰·格林",
  },
  {
    image: "/assets/images/dr-cameron.png",
    name: "萊拉·卡梅倫",
  },
  {
    image: "/assets/images/dr-livingston.png",
    name: "大衛·利文斯頓",
  },
  {
    image: "/assets/images/dr-peter.png",
    name: "伊萬·彼得",
  },
  {
    image: "/assets/images/dr-powell.png",
    name: "簡·鮑威爾",
  },
  {
    image: "/assets/images/dr-remirez.png",
    name: "亞歷克斯·拉米雷斯",
  },
  {
    image: "/assets/images/dr-lee.png",
    name: "李茉莉",
  },
  {
    image: "/assets/images/dr-cruz.png",
    name: "艾莉安娜·克魯茲",
  },
  {
    image: "/assets/images/dr-sharma.png",
    name: "哈迪克·夏爾馬",
  },
];

export const StatusIcon = {
  scheduled: "/assets/icons/check.svg",
  pending: "/assets/icons/pending.svg",
  cancelled: "/assets/icons/cancelled.svg",
};
