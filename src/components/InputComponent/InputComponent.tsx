import React from "react";

interface InputComponentProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
    value: string; 
    onChange: (value: string) => void; 
}

export const InputComponent = ({ value, onChange, ...rest }: InputComponentProps) => {
    return (
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)} 
          {...rest} 
          style={{ 
              border: "2px solid blue",
              borderRadius: "8px",
              padding: "0.5rem",
              width: "100%", 
              ...rest.style
          }}
        />
    );
};