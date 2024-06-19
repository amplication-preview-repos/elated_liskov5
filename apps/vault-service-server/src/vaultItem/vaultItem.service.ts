import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { VaultItemServiceBase } from "./base/vaultItem.service.base";

@Injectable()
export class VaultItemService extends VaultItemServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
