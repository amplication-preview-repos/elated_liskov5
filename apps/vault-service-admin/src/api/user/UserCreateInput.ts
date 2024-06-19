import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  accounts?: AccountWhereUniqueInput | null;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  username: string;
};
