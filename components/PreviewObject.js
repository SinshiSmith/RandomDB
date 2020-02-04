import { useState, useEffect } from "react";
import useGenerator from "../hooks/useGenerator";

import Button from "../components/Button";

const PreviewObject = ({ rows }) => {
  const [example, setExample] = useState("");
  const generator = useGenerator({ rows, limit: 1 });

  useEffect(() => {
    setExample(generator);
  }, [rows, setExample]);

  return (
    <div>
      <Button onClick={() => setExample(generator)}>Example Object</Button>
      <div>
        <pre>{JSON.stringify(example, null, 2)}</pre>
      </div>
    </div>
  );
};

export default PreviewObject;
