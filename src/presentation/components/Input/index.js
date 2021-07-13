import React from "react";

import { Container, TextInput } from "./styles";

function Input({ name, icon, ...rest }) {
  return (
    <Container>
      {icon}
      <TextInput placeholderTextColor="#868686" {...rest} />
    </Container>
  );
}

export default Input;
