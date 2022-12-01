import "./global_styles.css";
import Header from "./Header";
import { unstable_getServerSession } from "next-auth/next";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await unstable_getServerSession();
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Header session={session} />
        {children}
      </body>
    </html>
  );
}
