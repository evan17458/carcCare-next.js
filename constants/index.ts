export const GenderOptions = ["男", "女", "其它"];

export const DetailFormDefaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  birthDate: new Date(Date.now()),
  gender: "男" as Gender,
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
  identificationType: "", //預設值不對,沒有在下面IdentificationTypes內的話,就不會出現placehoder
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

export const technicians = [
  {
    image: "/assets/images/01.png",
    name: "王建綸",
  },
  {
    image: "/assets/images/02.jpg",
    name: "黃景行",
  },
  {
    image: "/assets/images/03.jpg",
    name: "李大維",
  },
  {
    image: "/assets/images/04.jpg",
    name: "陳奕凡",
  },
  {
    image: "/assets/images/05.jpeg",
    name: "陳建華",
  },
  {
    image: "/assets/images/06.webp",
    name: "林承恩",
  },
  {
    image: "/assets/images/07.jpg",
    name: "李文雄",
  },
  {
    image: "/assets/images/08.jpg",
    name: "張東建",
  },
];

export const StatusIcon = {
  scheduled: "/assets/icons/check.svg",
  pending: "/assets/icons/pending.svg",
  cancelled: "/assets/icons/cancelled.svg",
};
