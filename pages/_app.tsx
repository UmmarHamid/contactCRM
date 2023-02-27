import Navbar from '@/components/Navbar/Navbar';
import '@/styles/globals.css';
import classNames from 'classnames';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  let rootClasses = classNames('ml-36 root-wrapper max-h-screen mobile:ml-0');
  return (
    <div className={rootClasses}>
      <div className="navbarr fixed top-0 left-0 z-10 mobile:w-full">
        <Navbar />
      </div>

      <Component {...pageProps} />
    </div>
  );
}
