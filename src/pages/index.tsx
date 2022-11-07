import { ReactElement } from 'react';

import { getLayout } from '~shared/layouts/main-layout';

export default function Home(): ReactElement {
  return <div>Hello, NextJS!</div>;
}

Home.getLayout = getLayout;
