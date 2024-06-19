import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  SelectArrayInput,
  ReferenceArrayInput,
} from "react-admin";

import { AccountTitle } from "../account/AccountTitle";
import { VaultItemTitle } from "../vaultItem/VaultItemTitle";

export const VaultCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="account.id" reference="Account" label="Account">
          <SelectInput optionText={AccountTitle} />
        </ReferenceInput>
        <TextInput label="name" source="name" />
        <SelectArrayInput
          label="sharedWith"
          source="sharedWith"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          optionValue="value"
        />
        <ReferenceArrayInput
          source="vaultItems"
          reference="VaultItem"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={VaultItemTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
