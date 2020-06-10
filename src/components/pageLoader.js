import React, { useState } from "react";
import { Ring } from "react-awesome-spinners";

const PageLoader = () => {
  const [loading, setLoading] = useState("");

  return (
    <>
      loading && <Ring />
    </>
  );
};

export default PageLoader;
