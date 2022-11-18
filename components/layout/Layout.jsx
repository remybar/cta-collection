import Head from "next/head";
import { useRouter } from "next/router";

import { Header } from "./Header";
import { Footer } from "./Footer";

/**
 * Page layout
 * @param title the page title
 * @param LogoIcon the icon used as logo
 * @param meta metadata stored in the 'head' section.
 * @param menus header menus.
 * @param withHeader indicates if a header should be included or not.
 * @param children page content.
 */
export const Layout = ({
  title,
  LogoIcon,
  meta,
  menus,
  withHeader = true,
  withFooter = true,
  children,
  lastUpdate,
}) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{title}</title>
        {meta?.description && (
          <meta name="description" content={meta.description} />
        )}
        <link rel="icon" href="/favicon.svg" />
        {/* Open Graph */}
        <meta
          property="og:url"
          content={`http://localhost:3000${router.asPath}`}
        />
        {meta?.type && <meta property="og:type" content={meta.type} />}
        {meta?.title && <meta property="og:site_name" content={meta.title} />}
        {meta?.description && (
          <meta property="og:description" content={meta.description} />
        )}
        {meta?.title && <meta property="og:title" content={meta.title} />}
        <script
          async
          data-id="101409144"
          src="//static.getclicky.com/js"></script>
        <noscript>
          <p>
            <img
              alt="Clicky"
              width="1"
              height="1"
              src="//in.getclicky.com/101409144ns.gif"
            />
          </p>
        </noscript>
      </Head>
      <div className="h-screen flex flex-col">
        {withHeader && <Header title={title} Icon={LogoIcon} menus={menus} />}
        <main className="flex-grow px-4 sm:px-6">{children}</main>
        {withFooter && <Footer lastUpdate={lastUpdate} />}
      </div>
    </>
  );
};
