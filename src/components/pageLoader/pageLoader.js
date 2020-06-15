import React from "react";
import { useSelector } from "react-redux";
import { Ring } from "react-awesome-spinners";
import Loader from "react-loader-spinner";
import PageLoaderDiv from "../../styles/PageLoaderDiv";

const PageLoader = () => {
  const isLoading = useSelector((state) => state.usersReducer.loading);
  return (
    isLoading && (
      <PageLoaderDiv>
        <Ring />
      </PageLoaderDiv>
    )
  );
};

export default PageLoader;
