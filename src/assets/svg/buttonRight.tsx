import * as React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';
import {SVG_Props} from '../../types';
const ButtonRight: React.FC<SVG_Props> = ({height = 75, width = 75}) => (
  <Svg height={height} width={width} fill="none">
    <Circle cx={37.5} cy={37.5} r={37.5} fill="#000" />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeWidth={2}
      d="m34 30 8 7.5-8 7.5"
    />
  </Svg>
);
export default ButtonRight;
