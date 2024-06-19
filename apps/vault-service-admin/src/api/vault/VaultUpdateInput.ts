import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";
import { VaultItemUpdateManyWithoutVaultsInput } from "./VaultItemUpdateManyWithoutVaultsInput";

export type VaultUpdateInput = {
  account?: AccountWhereUniqueInput | null;
  name?: string | null;
  sharedWith?: Array<"Option1">;
  vaultItems?: VaultItemUpdateManyWithoutVaultsInput;
};
