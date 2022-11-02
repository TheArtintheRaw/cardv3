import React, {Suspense} from "react";

import dynamic from "next/dynamic";

const DynamicMain = dynamic(() => import("../src/main"), {
  suspense: true,
  ssr: true,
});

const IndexPage = ({}) => {
  return (
    <Suspense fallback={`Loading...`}>
      <DynamicMain />
    </Suspense>
  );
};

export default IndexPage;
