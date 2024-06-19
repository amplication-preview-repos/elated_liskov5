import { Vault } from "../vault/Vault";

export type VaultItem = {
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  typeField?: "Option1" | null;
  updatedAt: Date;
  vault?: Vault | null;
};
