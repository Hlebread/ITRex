import { useAppSelector } from "..";

export const useGetAuthStatus = () =>
  useAppSelector((state) => state);
export const useGetAuthUsertype = () =>
  useAppSelector((state) => state.auth.usertype);
