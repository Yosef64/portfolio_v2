import { ApiMessageType, UserInfoType } from "@/components/model";

export async function sendEmail(data: UserInfoType): Promise<ApiMessageType> {
  try {
    const info = await fetch("http://localhost:5000/send-email", {
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
