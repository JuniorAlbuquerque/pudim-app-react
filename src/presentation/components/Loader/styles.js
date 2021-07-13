import styled from "styled-components/native";
import { Dimensions } from 'react-native';

const { height, width } = Dimensions.get("window");

let containerWidth = height + 100.

export const Container = styled.View`
    z-index: 1;
    elevation: 2;
    height: ${height + 100}px;
    width: ${width}px;
    position: absolute;
    align-items: center;
    justify-content: center;
    background-color: rgba(0,0,0,0.5);
`;

export const Indicator = styled.View`
    background-color:rgb(46, 46, 46);
    height: 44px;
    width: 44px;
    border-radius: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: center;
`;
