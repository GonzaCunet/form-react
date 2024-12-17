import React from "react";
import { TextField } from "./TextField";
import { Button } from "./Button";

// type PropDeForm = {
//   OnLogin: any;
// };

function Form() {
  return (
    <form>
      <TextField>Email</TextField>
      <TextField>Nombre</TextField>
      <Button>Ingresar</Button>
    </form>
  );
}

export { Form };
