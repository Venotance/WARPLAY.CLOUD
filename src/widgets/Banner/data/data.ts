import astronaut from '~shared/assets/images/astronaut.png';
import fight from '~shared/assets/images/fight.png';
import king from '~shared/assets/images/king.png';
import stalker from '~shared/assets/images/stalker.png';

export interface ImageForSliderInterface {
  id: number;
  image: string;
}

export const ImageForSlider: ImageForSliderInterface[] = [
  { id: 0, image: stalker },
  { id: 1, image: king },
  { id: 2, image: astronaut },
  { id: 3, image: fight },
];
