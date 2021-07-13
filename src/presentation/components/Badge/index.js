import React from "react";

import { Container, Text } from "./styles";

const Badge = ({ count }) => {
  return (
    <Container count={count}>
      <Text>{count}</Text>
    </Container>
  );
};

export default Badge;
