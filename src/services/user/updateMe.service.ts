import { useUpdateMyDataMutation } from "@/redux/apis/userApi";
import { setUser } from "@/redux/slices/authSlice";
import { RootState, useAppDispatch, useAppSelector } from "@/redux/store";
import { UserFormSchema } from "@/validation/user/user.schema";
import { useTranslations } from "next-intl";
import { toast } from "sonner";

export const useUpdateMeService = () => {
  const [updateUser, { isLoading }] = useUpdateMyDataMutation();
  const dispatch = useAppDispatch();
  const user = useAppSelector((state: RootState) => state.auth.user);
  const t = useTranslations("User");

  const myInfo = async (data: UserFormSchema) => {
    if (!user) {
      toast.error("User not found");
      return;
    }

    try {
      const res = await updateUser({
        name: data.name,
        email: data.email,
        phone: data.phone as string,
        position: data.position,
      }).unwrap();

      dispatch(setUser({ data: res }));
      toast.success(t("validation.updateSuccess"));

      return res;
    } catch (error: any) {
      toast.error(
        error?.data?.error?.message ?? toast(t("validation.updateFailed")),
      );
      throw error;
    }
  };

  return {
    myInfo,
    isLoading,
  };
};
