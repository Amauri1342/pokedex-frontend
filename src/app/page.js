import styles from './page.module.css';
import Login from '@/components/Login/Login';
import Providers from './providers';

export default function Home() {
  return (
    <Providers>
      <main>
        <Login />
      </main>
    </Providers>
  );
}
