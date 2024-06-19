import { User } from "../user/User";
import { Vault } from "../vault/Vault";

export type Account = {
  createdAt: Date;
  id: string;
  name: string | null;
  updatedAt: Date;
  user?: User | null;
  vaults?: Array<Vault>;
};
