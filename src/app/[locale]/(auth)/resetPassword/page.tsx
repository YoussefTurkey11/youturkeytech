import ResetPasswordForm from "./ResetPasswordForm";
import { Suspense } from "react";
import { Spinner } from "@/components/ui/spinner";
import BackToLogin from "@/components/share/(auth)/BackToLogin";

const ResetPassword = () => {
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
        <ResetPasswordForm />
      </Suspense>
    </>
  );
};

export default ResetPassword;
