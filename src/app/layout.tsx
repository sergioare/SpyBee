import type { Metadata } from "next";
import Head from "next/head";
import { ContextProvider } from "@/context/appContext";
import DefaultLayout from "@/components/modules/DefaultLayout";
export const metadata: Metadata = {
  title: "SpyBee",
};

type LayoutProps = {
  LayoutComponent: React.ComponentType<{ children: React.ReactNode }>;
  children: React.ReactNode;
};

const LayoutWrapper = ({ LayoutComponent, children }: LayoutProps) => {
  return <LayoutComponent>{children}</LayoutComponent>;
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>SpyBee</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=0"
        />
      </Head>
      <body>
        <ContextProvider>
          <LayoutWrapper LayoutComponent={DefaultLayout}>
            {children}
          </LayoutWrapper>
        </ContextProvider>
      </body>
    </html>
  );
}
