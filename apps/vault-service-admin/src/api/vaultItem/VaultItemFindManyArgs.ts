import { VaultItemWhereInput } from "./VaultItemWhereInput";
import { VaultItemOrderByInput } from "./VaultItemOrderByInput";

export type VaultItemFindManyArgs = {
  where?: VaultItemWhereInput;
  orderBy?: Array<VaultItemOrderByInput>;
  skip?: number;
  take?: number;
};
