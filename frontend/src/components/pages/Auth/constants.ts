export type userType = {
  _id?: string;
  firstName?: string | undefined;
  lastName?: string | undefined;
  email?: string | undefined;
};

export type loginCred = {
  email?: string;
  password?: string;
};

export type userDetail = {
  firstName: string;
  lastName: string;
  email: string;
  mobile?: null;
  role?: string;
};
