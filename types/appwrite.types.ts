import { Models } from "node-appwrite";
// 01:16:29
export interface Patient extends Models.Document {
  userId: string;
  name: string;
  email: string;
  phone: string;
  birthDate: Date;
  gender: Gender;
  address: string;
  occupation: string;
  emergencyContactName: string;
  emergencyContactNumber: string;
  technician: string;
  carBrand: string;
  carNumber: string;
  carProblem: string | undefined;
  currentFix: string | undefined;
  carFixHistory: string | undefined;
  pastAccidentRecords: string | undefined;
  identificationType: string | undefined;
  identificationNumber: string | undefined;
  identificationDocument: FormData | undefined;
  privacyConsent: boolean;
}

export interface Appointment extends Models.Document {
  patient: Patient;
  schedule: Date;
  status: Status;
  technician: string;
  reason: string;
  note: string;
  userId: string;
  cancellationReason: string | null;
}
