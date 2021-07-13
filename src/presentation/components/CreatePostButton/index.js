import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { TouchableWithoutFeedback } from "react-native";

import { Container } from "./styles";

const CreatePostButton = ({ onPress, focused }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Container focused={focused}>
        <AntDesign name="plus" size={28} color="#fff" />
      </Container>
    </TouchableWithoutFeedback>
  );
};

export default CreatePostButton;
