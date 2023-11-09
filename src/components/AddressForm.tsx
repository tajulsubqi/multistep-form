import { FormWrapper } from "./FormWrapper";

type AddressData = {
  street: string;
  city: string;
  state: string;
};

type AddressFormProps = AddressData & {
  updateFields: (fields: Partial<AddressData>) => void;
};

export function AddressForm({ street, city, state, updateFields }: AddressFormProps) {
  return (
    <FormWrapper title="Address">
      <label>Street</label>
      <input autoFocus required type="text" value={street} onChange={(e) => updateFields({ street: e.target.value })} />
      <label>City</label>
      <input required type="text" value={city} onChange={(e) => updateFields({ city: e.target.value })} />
      <label>State</label>
      <input required type="text" value={state} onChange={(e) => updateFields({ state: e.target.value })} />
    </FormWrapper>
  );
}
