import Image from "next/image";

import HomeImage from "images/home.png";
import { PageLayout } from "components/layout";

export default function HomePage() {
  return (
    <PageLayout>
      <Image
        className="mx-auto mt-16"
        src={HomeImage}
        width="500"
        height="500"
      />
    </PageLayout>
  );
}
