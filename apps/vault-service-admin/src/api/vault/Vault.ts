import { Account } from "../account/Account";
import { VaultItem } from "../vaultItem/VaultItem";

export type Vault = {
  account?: Account | null;
  createdAt: Date;
  id: string;
  name: string | null;
  sharedWith?: Array<"Option1">;
  updatedAt: Date;
  vaultItems?: Array<VaultItem>;
};
