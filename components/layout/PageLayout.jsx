import { CircleStackIcon } from "@heroicons/react/24/outline";
import { Layout } from "./Layout";

export const PageLayout = ({ pageMeta = {}, children, ...props }) => {
  const meta = {
    title: "CTA-tools",
    description: "CTA tools",
    type: "website",
    ...pageMeta,
  };
  const menus = [
    {
      label: "Collection",
      link: "/collection",
    },
  ];

  return (
    <Layout
      title="CTA tools"
      LogoIcon={CircleStackIcon}
      meta={meta}
      menus={menus}
      {...props}>
      {children}
    </Layout>
  );
};
