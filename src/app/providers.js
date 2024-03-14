"use client";
import React from "react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClientProvider } from "@tanstack/react-query";
import { SnackbarProvider as NotistackProvider } from "notistack";

import queryClient from "@/utils/query-client";

export default function Providers({ children }) {
  return (
    <QueryClientProvider client={queryClient}>
      <NotistackProvider
        dense
        maxSnack={5}
        preventDuplicate
        autoHideDuration={3000}
        variant="success"
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <div>
            <ReactQueryDevtools initialIsOpen buttonPosition="bottom-left" />
            {children}
        </div>
      </NotistackProvider>
    </QueryClientProvider>
  );
}
