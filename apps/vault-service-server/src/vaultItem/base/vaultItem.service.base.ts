/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  VaultItem as PrismaVaultItem,
  Vault as PrismaVault,
} from "@prisma/client";

export class VaultItemServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.VaultItemCountArgs, "select">
  ): Promise<number> {
    return this.prisma.vaultItem.count(args);
  }

  async vaultItems(
    args: Prisma.VaultItemFindManyArgs
  ): Promise<PrismaVaultItem[]> {
    return this.prisma.vaultItem.findMany(args);
  }
  async vaultItem(
    args: Prisma.VaultItemFindUniqueArgs
  ): Promise<PrismaVaultItem | null> {
    return this.prisma.vaultItem.findUnique(args);
  }
  async createVaultItem(
    args: Prisma.VaultItemCreateArgs
  ): Promise<PrismaVaultItem> {
    return this.prisma.vaultItem.create(args);
  }
  async updateVaultItem(
    args: Prisma.VaultItemUpdateArgs
  ): Promise<PrismaVaultItem> {
    return this.prisma.vaultItem.update(args);
  }
  async deleteVaultItem(
    args: Prisma.VaultItemDeleteArgs
  ): Promise<PrismaVaultItem> {
    return this.prisma.vaultItem.delete(args);
  }

  async getVault(parentId: string): Promise<PrismaVault | null> {
    return this.prisma.vaultItem
      .findUnique({
        where: { id: parentId },
      })
      .vault();
  }
}
