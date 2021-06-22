import React, { useState } from "react";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";

// IJN Components
import Cursor from "components/cursor";


export default function IJNlayout({ children, SEO }) {

  return (
    <>
      <DefaultSeo {...SEO} />
      {children}
      {/* <Cursor /> */}
    </>
  );
}
