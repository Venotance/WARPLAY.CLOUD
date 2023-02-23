import { ReactElement } from 'react';

import { Banner } from '~widgets/Banner';
import { HowItWork } from '~widgets/HowItWork';
import { MapOfLocations } from '~widgets/MapOfLocations';
import { RunOnAnyDevices } from '~widgets/StartOnAnyDevice/RunOnAnyDevices';
import { StartPlaying } from '~widgets/StartPlaying';
import { Tariffs } from '~widgets/Tariffs';

import { getLayout } from '~shared/layouts/main-layout';

export default function Home(): ReactElement {
  return (
    <>
      <Banner />
      <HowItWork />
      <StartPlaying />
      <Tariffs />
      <RunOnAnyDevices />
      <MapOfLocations />
    </>
  );
}

Home.getLayout = getLayout;
