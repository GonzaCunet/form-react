import React from "react";

type TextFieldProps = {
  type: string;
  name: string;
  children: any;
};
function TextField(prop: TextFieldProps) {
  return (
    <div>
      <label>{prop.children}</label>
      <input type={prop.type}></input>
    </div>
  );
}

export { TextField };
