import { useRouter } from "next/router";

const useNavigation = () => {
  const router = useRouter();

  const handleNavigation = (dst: string) => {
    router.push(`/${dst}`);
  };

  return handleNavigation;
};

export default useNavigation;
