import BackToLogin from "@/components/share/(auth)/BackToLogin";
import VerifyOTP from "./VerifyOTP";
import { Suspense } from "react";
import { Spinner } from "@/components/ui/spinner";

const page = () => {
  return (
    <>
      <BackToLogin />
      <Suspense
        fallback={
          <div className="text-center p-10">
            <Spinner />
          </div>
        }
      >
        <VerifyOTP />
      </Suspense>
    </>
  );
};

export default page;
