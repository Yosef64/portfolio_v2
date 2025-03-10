import { ApiMessageType, UserInfoType } from "@/components/model";

export async function sendEmail(data: UserInfoType): Promise<ApiMessageType> {
  // const API_URL = import.meta.env.VITE_API_URL;
  try {
    const info = await fetch("https://yosi-port-back.vercel.app/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return { message: info.ok };
  } catch (error) {
    return { message: false };
  }
}
