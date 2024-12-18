import React from "react";
import { TextField } from "./TextField";
import { Button } from "./Button";

type PropDeForm = {
  OnLogin: any;
};

function Form(prop: PropDeForm) {
  return (
    <form onSubmit={prop.OnLogin}>
      <TextField name="email" type="text">
        Email
      </TextField>
      <TextField name="pass" type="password">
        Contraseña
      </TextField>
      <Button>Ingresar</Button>
    </form>
  );
}

export { Form };
