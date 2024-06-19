import { VaultWhereUniqueInput } from "../vault/VaultWhereUniqueInput";

export type VaultItemCreateInput = {
  description?: string | null;
  name?: string | null;
  typeField?: "Option1" | null;
  vault?: VaultWhereUniqueInput | null;
};
