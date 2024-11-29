import React from 'react';
import { FormComponent, ContactButtons } from '../../components/common/FormComponents';

export const RegisterForm: React.FC = () => {
  return (
    <div className="bg-blueBg flex flex-col rounded-md gap-10 p-6">
      <FormComponent />

      <ContactButtons />
    </div>
  );
};
