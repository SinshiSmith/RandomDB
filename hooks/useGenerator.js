import { useState } from "react";

function useGenerator({ rows, limit }) {
  const [array, setArray] = useState();
  if ((limit = 1)) {
    return Object.values(rows).reduce(
      (current, { name, fields }) => ({
        ...current,
        [name]: fields[Math.floor(Math.random() * fields.length)]
      }),
      {}
    );
  }
  while (array.length < limit) {
    array.push(
      Object.values(rows).reduce(
        (current, { name, fields }) => ({
          ...current,
          [name]: fields[Math.floor(Math.random() * fields.length)]
        }),
        {}
      )
    );
  }
  return array;
}

export default useGenerator;
