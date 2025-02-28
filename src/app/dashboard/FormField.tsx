"use client";
import React from "react";

interface FormFieldProps {
  name: string;
  value: string | number | null;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}

const FormField: React.FC<FormFieldProps> = ({
  name,
  value,
  onChange,
  disabled,
}) => {
  return (
    <React.Fragment key={name}>
      <div className="col-span-4 mt-1 capitalize">{name}</div>
      <div className="col-span-1 mt-1">:</div>
      <div className="col-span-7 mt-1">
        <input
          type="text"
          name={name}
          value={value as string}
          onChange={onChange}
          className="w-full rounded border border-gray-300 p-1"
          disabled={disabled}
        />
      </div>
    </React.Fragment>
  );
};

export default FormField;
