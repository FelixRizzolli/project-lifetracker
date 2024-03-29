import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.scss';

import { useSession, signIn, signOut } from 'next-auth/react';
import { useRouter } from 'next/router';

import { ArrowSmDownIcon, ArrowSmUpIcon } from '@heroicons/react/solid';
import {
  CursorClickIcon,
  MailOpenIcon,
  UsersIcon,
} from '@heroicons/react/outline';

const Home: NextPage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta
          name="description"
          content="Generated by create next app"
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a onClick={() => signOut()}>Project LifeTracker!</a>
        </h1>
        <button
          type="button"
          className={styles.loginButton}
          onClick={() => {
            if (status === 'authenticated') {
              router.push('/dashboard');
            } else {
              signIn();
            }
          }}
        >
          {status === 'authenticated' ? 'Dashboard' : 'Login'}
        </button>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              width={72}
              height={16}
            />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
