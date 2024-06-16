import { NextPage } from 'node_modules/next';
import App, { AppContext } from 'next/app';
import { MainLayout } from '../widgets';

import '../app/assets/normalize.scss';
import '../app/assets/variables.scss';
import '../app/assets/globals.scss';

interface AppTypes {
  Component: NextPage;
  pageProps: any;
}

const MyApp = ({ Component, pageProps }: AppTypes) => (
  <MainLayout>
    <main className="main">
      <Component {...pageProps} />
    </main>
  </MainLayout>
);

MyApp.getInitialProps = async (appContext: AppContext) => {
  let appProps = await App.getInitialProps(appContext);
  return { ...appProps };
};

export default MyApp;
