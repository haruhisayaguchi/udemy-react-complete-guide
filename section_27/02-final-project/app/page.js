import fs from 'node:fs/promises';

import ClientDemo from "@/components/ClientDemo";
import DataFetchingDemo from "@/components/DataFetchingDemo";
import RSCDemo from "@/components/RSCDemo";
import ServerActionsDemo from "@/components/ServerActionsDemo";
import UsePromiseDemo from "@/components/UsePromisesDemo";
import { Suspense } from "react";
import ErrorBoundary from '@/components/ErrorBoundary';

export default async function Home() {
  const fethcUsersPromise = new Promise((resolve, reject) =>
    setTimeout(async () => {
      const data = await fs.readFile('dummy-db.json', 'utf-8');
      const users = JSON.parse(data);
      // resolve(users);
      reject(new Error('Error!'))
    }, 2000))

  return (
    <main>
      <ErrorBoundary>
        <Suspense fallback={<p>Loading users...</p>}>
          <UsePromiseDemo usersPromise={fethcUsersPromise} />
        </Suspense>
      </ErrorBoundary>
    </main>
  );
}
