import { ReactElement } from 'react';

import { Banner } from '~widgets/Banner';

import { getLayout } from '~shared/layouts/main-layout';

export default function Home(): ReactElement {
  return (
    <>
      <Banner />
    </>
  );
}

Home.getLayout = getLayout;
