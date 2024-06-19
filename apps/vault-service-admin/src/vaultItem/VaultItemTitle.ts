import { VaultItem as TVaultItem } from "../api/vaultItem/VaultItem";

export const VAULTITEM_TITLE_FIELD = "name";

export const VaultItemTitle = (record: TVaultItem): string => {
  return record.name?.toString() || String(record.id);
};
