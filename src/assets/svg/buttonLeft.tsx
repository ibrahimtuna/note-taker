import * as React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';
import {SVG_Props} from '../../types';
const ButtonLeft: React.FC<SVG_Props> = ({height = 45, width = 45}) => (
  <Svg height={height} width={width} fill="none">
    <Circle
      cx={22.5}
      cy={22.5}
      r={22.5}
      fill="#000"
      transform="matrix(-1 0 0 1 45 0)"
    />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeWidth={2}
      d="m24.6 18-4.8 4.5 4.8 4.5"
    />
  </Svg>
);
export default ButtonLeft;
