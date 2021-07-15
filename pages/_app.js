import 'bootstrap/dist/css/bootstrap.min.css';
import 'tailwindcss/tailwind.css';
import { ProvideAuth } from '../utils/auth/useAuth';

function MyApp({ Component, pageProps }) {
  return (
    <ProvideAuth>
      <Component {...pageProps} />
    </ProvideAuth>
  );
}

export default MyApp;
