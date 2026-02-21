/* THIS FILE WAS GENERATED AUTOMATICALLY BY PAYLOAD. */
import type { Metadata } from "next";

import config from "@payload-config";
import { handleServerFunctions, RootLayout } from "@payloadcms/next/layouts";
import React from "react";

import { importMap } from "./admin/importMap";
import "@payloadcms/next/css";
import "./custom.scss";

type Args = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  title: "Appricotsoft Admin",
  description: "Payload CMS Admin Panel",
};

const Layout = ({ children }: Args) => (
  <RootLayout 
    config={config} 
    importMap={importMap}
    serverFunction={async function(args) {
      "use server";
      return handleServerFunctions({
        ...args,
        config,
        importMap,
      });
    }}
  >
    {children}
  </RootLayout>
);

export default Layout;
