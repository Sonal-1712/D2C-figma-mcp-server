import '@/styles/globals.scss';
import '@/styles/variables.scss';

// Import our custom component styles
import '../components/ModalWrapper.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
