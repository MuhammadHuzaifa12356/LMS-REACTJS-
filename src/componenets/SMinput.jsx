import TextField from "@mui/material/TextField";

function SMInput(props) {
  const { label, disabled, onChange ,variant,color} = props;
  return (
    <>
      <TextField
        color={color}
        onChange={onChange}
        disabled={disabled}
        variant={variant}
        label={label}
    
      />
    </>
  );
}
export default SMInput;