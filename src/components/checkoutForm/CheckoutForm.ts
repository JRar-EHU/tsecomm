import './CheckoutForm.css';
import { regexToPattern } from '../../utils/regexToPattern.ts';
import type { FormField } from '../../Types.ts';

const formFieldsData: FormField[][] = [
  [
    {
      name: 'firstName',
      label: 'First Name',
      type: 'text',
      validation: { minLength: 3, maxLength: 32 },
    },
    {
      name: 'lastName',
      label: 'Last Name',
      type: 'text',
      validation: { minLength: 3, maxLength: 32 },
    },
    {
      name: 'maidenName',
      label: 'Maiden Name',
      type: 'text',
      validation: { minLength: 3, maxLength: 32 },
    },
  ],
  [
    {
      name: 'email',
      label: 'Email',
      type: 'email',
    },
    {
      name: 'phone',
      label: 'Phone',
      type: 'text',
      validation: { pattern: /^\+\d+( \d+)+$/ },
    },
  ],
  [
    {
      name: 'address',
      label: 'Address',
      type: 'text',
      validation: { pattern: /^\d{4} .+$/ },
    },
    {
      name: 'city',
      label: 'City',
      type: 'text',
    },
    {
      name: 'postalCode',
      label: 'Postal Code',
      type: 'text',
    },
  ],
];

function renderFieldGroup(fields: FormField[], isLast: boolean): string {
  const fieldsHtml = fields
    .map(({ name, label, type, validation }) => {
      const valAttributes: string[] = [];

      if (validation) {
        if (validation.minLength)
          valAttributes.push(`minlength="${validation.minLength}"`);
        if (validation.maxLength)
          valAttributes.push(`maxlength="${validation.maxLength}"`);
        if (validation.pattern) {
          const pattern = regexToPattern(validation.pattern);
          valAttributes.push(`pattern="${pattern}"`);
        }
      }

      return `
        <div class="field">
          <div class="control">
            <input
              class="input is-shadowless checkout-form--text__fields is-rounded checkout-form--input"
              type="${type}"
              placeholder="${label}"
              name="${name}"
              required
              ${valAttributes.join(' ')}
            />
          </div>
        </div>
      `;
    })
    .join('');

  return isLast ? fieldsHtml : `${fieldsHtml}<hr class="hr" />`;
}

export function CheckoutForm(): string {
  const form = formFieldsData
    .map((group, i) => renderFieldGroup(group, i === formFieldsData.length - 1))
    .join('');

  return `
    <form id="checkoutForm" class="box is-shadowless checkout-form">
      ${form}
    </form>
  `;
}
