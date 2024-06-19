import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { VaultUpdateManyWithoutAccountsInput } from "./VaultUpdateManyWithoutAccountsInput";

export type AccountUpdateInput = {
  name?: string | null;
  user?: UserWhereUniqueInput | null;
  vaults?: VaultUpdateManyWithoutAccountsInput;
};
