/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { TextField } from "@mui/material";
import { useFormContext } from "react-hook-form";
import { FieldValues, FieldErrors, UseFormRegister } from "react-hook-form";

interface InputProps {
  type: string;
  name: string;
  placeholder?: string;
  register: UseFormRegister<any>;
  rules?: { [key: string]: any };
  errors: FieldErrors<FieldValues>;
}

const Input: React.FC<InputProps> = ({
  name,
  rules,
  placeholder,
  type,
  ...props
}) => {
  const { register } = useFormContext();

  return (
    <div className="mb-4 ml-4">
      <TextField
        {...props}
        {...register(name, rules)} // Use register directly as the ref
        type={type} // Pass the type prop directly to TextField
        variant="outlined"
        InputProps={{
          style: {
            color: "black",
            textAlign: "center",
            marginBottom: "1/2",
          },
        }}
        placeholder={placeholder}
        sx={{
          width: "280px",
          color: "white",
          height: "40px",
          marginBottom: "8px",
          borderRadius: "20px",
          backgroundColor: "#fff",
          "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: "transparent",
          },
          "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: "transparent",
          },
          "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
            {
              borderColor: "transparent",
            },
        }}
      />
    </div>
  );
};

export default Input;
