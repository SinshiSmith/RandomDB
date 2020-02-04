import Input from "../components/Input";
import Button from "./Button";

const FieldRow = ({ setRow, removeRow }) => (
  <div css={{ marginBottom: 15 }}>
    <Input
      css={{ width: 150 }}
      type="text"
      placeholder="Field Name"
      onChange={e => {
        setRow({ name: e.target.value.trim() });
      }}
    />
    <span css={{ margin: "0 10px" }}>:</span>
    <Input
      css={{ width: 500 }}
      type="text"
      placeholder="type values here separated by ,"
      onChange={e => {
        setRow({
          fields: e.target.value
            .split(",")
            .filter(item => item.trim())
            .map(item => item.trim())
        });
      }}
    />
    <Button
      onClick={removeRow}
      version="text"
      css={({ colors }) => ({ marginLeft: 20, color: colors.danger })}
    >
      Remove
    </Button>
  </div>
);

export default FieldRow;
