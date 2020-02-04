import { useState } from "react";
import FieldRow from "../components/FieldRow";
import Button from "../components/Button";

const index = () => {
  const [rows, setRows] = useState({
    1: { name: "Field 1", fields: [] }
  });
  return (
    <div>
      <h1 css={{ fontFamily: "'Great Vibes', cursive" }}>RandomDB</h1>
      {Object.entries(rows).map(([key, value]) => (
        <FieldRow
          key={key}
          setRow={input => setRows({ ...rows, [key]: { ...value, ...input } })}
          removeRow={() => {
            const newObject = { ...rows };
            delete newObject[key];
            setRows(newObject);
          }}
        />
      ))}
      <Button
        onClick={() => {
          const lastID = Number.parseInt(Object.keys(rows).pop(), 10) || 0;
          setRows({
            ...rows,
            [lastID + 1]: { name: `Field ${lastID + 1}`, fields: [] }
          });
        }}
        css={({ backgroundsColors }) => ({
          width: "100%",
          maxWidth: 800,
          background: backgroundsColors.green
        })}
      >
        Add Field
      </Button>
      <h2 css={{ textTransform: "capitalize" }}>
        possible objects count:&nbsp;
        {Object.values(rows).reduce(
          (total, field) => total * field.fields.length,
          1
        )}
      </h2>
    </div>
  );
};

export default index;
