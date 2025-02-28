import global from "@/lib/global";
import useLocalStorage from "@/hooks/useLocalStorage";

const usePresensi = () => {
  const token = useLocalStorage("token", "");
  const isPresensedToday = async () => {
    const response = await fetch(`${global.api_url}/api/absensiToday`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    //cek 404
    if (response.status === 404) {
      return false;
    }
    return true;
  };
};
