interface InputComponentProps {
    value: string;
    onChange: (value: string) => void; 
    placeholder?: string;
    type?: string; 
    name?: string; 
}

export const InputComponent = ({ value, onChange, placeholder, type = "text", name }: InputComponentProps) => {
    return (
        <input
          value={value} 
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          type={type}
          name={name}
          style={{ 
              border: "2px solid blue",
              borderRadius: "8px",
              padding: "0.5rem",
              width: "100%"
          }}
        />
    );
};