export type InputProps = {
  data: {
    placeholder: string;
    name: keyof UserInfoType;
    type: string;
  };
  setUserInfo: React.Dispatch<React.SetStateAction<UserInfoType>>; 
  userInfo: UserInfoType;
};

export type UserInfoType = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export type ApiMessageType = {
  message: boolean;
};
