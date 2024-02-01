import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <h1>helooooooooooooooooo</h1>

      <Link href={'/users'}>
        Users
      </Link>
      <Link href={'/posts'}>
        Posts
      </Link>
    </main>
  );
}
