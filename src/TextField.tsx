import React from "react";

// type TextFieldProps = {
//   typeInput?: any;
//   labelText?: any;
//   InputName?: any;
//   children?: any;
// };
function TextField(p) {
  return (
    <div>
      <label>{p.children}</label>
      <input></input>
    </div>
  );
}

export { TextField };
