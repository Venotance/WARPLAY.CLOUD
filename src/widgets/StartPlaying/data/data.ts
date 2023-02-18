import download from '~shared/assets/images/start-play/download.png';
import joystick from '~shared/assets/images/start-play/joystick.png';
import mail from '~shared/assets/images/start-play/mail.png';
import switchImg from '~shared/assets/images/start-play/switch.png';
import { ImageArrayItemInterface } from '~shared/lib/ImageHelpers/ImageArrayInterface';

interface StepsInterface extends ImageArrayItemInterface {
  text: string;
}

export const StepsArray: StepsInterface[] = [
  { id: 0, image: mail, text: 'Create account' },
  { id: 1, image: download, text: 'Download module' },
  { id: 2, image: joystick, text: 'Choose tariff' },
  { id: 3, image: switchImg, text: 'Start playing' },
];
