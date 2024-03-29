import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {SVG_Props} from '../../types';
const Trash: React.FC<SVG_Props> = ({height = 34, width = 33}) => (
  <Svg height={height} width={width} fill="none">
    <Path
      fill="#000"
      d="M30.994 5.072h-8.828V3.287A3.287 3.287 0 0 0 18.878 0h-5.353a3.287 3.287 0 0 0-3.287 3.287v1.785h-8.83a1.409 1.409 0 1 0 0 2.817h2.865v20.945A5.166 5.166 0 0 0 9.44 34h13.525a5.165 5.165 0 0 0 5.166-5.166V7.89h2.864a1.409 1.409 0 0 0 0-2.817ZM13.055 3.287a.47.47 0 0 1 .47-.47h5.353a.47.47 0 0 1 .47.47v1.785h-6.293V3.287Zm12.21 25.594a2.348 2.348 0 0 1-2.348 2.348H9.44a2.348 2.348 0 0 1-2.348-2.348V7.89h18.221l-.047 20.992Z"
    />
    <Path
      fill="#000"
      d="M19.724 27.801a1.409 1.409 0 0 0 1.409-1.409V12.351a1.409 1.409 0 0 0-2.818 0v14.041a1.409 1.409 0 0 0 1.409 1.41ZM12.68 27.801a1.409 1.409 0 0 0 1.408-1.409V12.351a1.409 1.409 0 1 0-2.817 0v14.041a1.409 1.409 0 0 0 1.409 1.41Z"
    />
  </Svg>
);
export default Trash;
