import { ReactElement } from 'react';

import { Banner } from '~widgets/Banner';
import { HowItWork } from '~widgets/HowItWork';

import { getLayout } from '~shared/layouts/main-layout';

export default function Home(): ReactElement {
  return (
    <>
      <Banner />
      <HowItWork />
    </>
  );
}

Home.getLayout = getLayout;
