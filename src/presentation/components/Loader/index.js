import React  from "react";
import { ActivityIndicator, Platform,} from "react-native";
import { useSelector } from "react-redux";

import { Container, Indicator } from "./styles";


const Loader = () => {

  const loading = useSelector(state => state.app.loading_app)

  return loading ? (
    <Container>
      <Indicator>
        <ActivityIndicator
          size="large"
          animating={loading}
          color="#FFF"
          style={{
            left: Platform.OS === "ios" ? 1.3 : 0,
            top: Platform.OS === "ios" ? 1 : 0,
          }}
        />
      </Indicator>
    </Container>
  ) : null;
};

export default Loader;

