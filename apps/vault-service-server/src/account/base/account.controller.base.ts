/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { AccountService } from "../account.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AccountCreateInput } from "./AccountCreateInput";
import { Account } from "./Account";
import { AccountFindManyArgs } from "./AccountFindManyArgs";
import { AccountWhereUniqueInput } from "./AccountWhereUniqueInput";
import { AccountUpdateInput } from "./AccountUpdateInput";
import { VaultFindManyArgs } from "../../vault/base/VaultFindManyArgs";
import { Vault } from "../../vault/base/Vault";
import { VaultWhereUniqueInput } from "../../vault/base/VaultWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class AccountControllerBase {
  constructor(
    protected readonly service: AccountService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Account })
  @nestAccessControl.UseRoles({
    resource: "Account",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createAccount(
    @common.Body() data: AccountCreateInput
  ): Promise<Account> {
    return await this.service.createAccount({
      data: {
        ...data,

        user: data.user
          ? {
              connect: data.user,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        id: true,
        name: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Account] })
  @ApiNestedQuery(AccountFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Account",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async accounts(@common.Req() request: Request): Promise<Account[]> {
    const args = plainToClass(AccountFindManyArgs, request.query);
    return this.service.accounts({
      ...args,
      select: {
        createdAt: true,
        id: true,
        name: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Account })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Account",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async account(
    @common.Param() params: AccountWhereUniqueInput
  ): Promise<Account | null> {
    const result = await this.service.account({
      where: params,
      select: {
        createdAt: true,
        id: true,
        name: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Account })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Account",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateAccount(
    @common.Param() params: AccountWhereUniqueInput,
    @common.Body() data: AccountUpdateInput
  ): Promise<Account | null> {
    try {
      return await this.service.updateAccount({
        where: params,
        data: {
          ...data,

          user: data.user
            ? {
                connect: data.user,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          id: true,
          name: true,
          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Account })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Account",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteAccount(
    @common.Param() params: AccountWhereUniqueInput
  ): Promise<Account | null> {
    try {
      return await this.service.deleteAccount({
        where: params,
        select: {
          createdAt: true,
          id: true,
          name: true,
          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/vaults")
  @ApiNestedQuery(VaultFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Vault",
    action: "read",
    possession: "any",
  })
  async findVaults(
    @common.Req() request: Request,
    @common.Param() params: AccountWhereUniqueInput
  ): Promise<Vault[]> {
    const query = plainToClass(VaultFindManyArgs, request.query);
    const results = await this.service.findVaults(params.id, {
      ...query,
      select: {
        account: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,
        name: true,
        sharedWith: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/vaults")
  @nestAccessControl.UseRoles({
    resource: "Account",
    action: "update",
    possession: "any",
  })
  async connectVaults(
    @common.Param() params: AccountWhereUniqueInput,
    @common.Body() body: VaultWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      vaults: {
        connect: body,
      },
    };
    await this.service.updateAccount({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/vaults")
  @nestAccessControl.UseRoles({
    resource: "Account",
    action: "update",
    possession: "any",
  })
  async updateVaults(
    @common.Param() params: AccountWhereUniqueInput,
    @common.Body() body: VaultWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      vaults: {
        set: body,
      },
    };
    await this.service.updateAccount({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/vaults")
  @nestAccessControl.UseRoles({
    resource: "Account",
    action: "update",
    possession: "any",
  })
  async disconnectVaults(
    @common.Param() params: AccountWhereUniqueInput,
    @common.Body() body: VaultWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      vaults: {
        disconnect: body,
      },
    };
    await this.service.updateAccount({
      where: params,
      data,
      select: { id: true },
    });
  }
}