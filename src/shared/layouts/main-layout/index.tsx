import { ReactElement } from 'react';

import { FontLayout } from './font-layout';
import { MainLayout } from './main-layout';

export function getLayout(page: ReactElement): ReactElement {
  return (
    <FontLayout>
      <>
        <MainLayout>{page}</MainLayout>;
      </>
    </FontLayout>
  );
}
