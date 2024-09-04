import Image from "next/image";
import { redirect } from "next/navigation";

import DetailForm from "@/components/forms/DetailForm";
import { getPatient, getUser } from "@/lib/actions/patient.actions";

const Register = async ({ params: { userId } }: SearchParamProps) => {
  // 01:26:36

  const user = await getUser(userId);
  const patient = await getPatient(userId);
  if (patient) redirect(`/patients/${userId}/new-appointment`);

  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container">
        <div className="sub-container max-w-[860px] flex-1 flex-col py-10">
          <Image
            src="/assets/icons/logo-full.jpg"
            height={1000}
            width={1000}
            alt="patient"
            className="-mb-4 h-10 w-fit"
          />

          <DetailForm user={user} />

          <p className="copyright py-12">© 2024 Carecar</p>
        </div>
      </section>
      {/* 1:23:07 */}
      <Image
        src="/assets/images/register-img.jpg"
        height={1000}
        width={1000}
        alt="patient"
        className="side-img max-w-[390px]"
      />
    </div>
  );
};

export default Register;
