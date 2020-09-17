import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('screen');

const imageSize = width * 0.35;

export const Image = styled.Image`
	width: ${imageSize}px;
	height: ${imageSize}px;
`;
