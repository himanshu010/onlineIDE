import "./index.css";

import { MotionConfig } from "framer-motion";
import { lazy, StrictMode, Suspense, useEffect, type ComponentType } from "react";
import { createRoot } from "react-dom/client";

import { ToastProvider, useToast } from "@/lib/toast";
import type { PageProps } from "@/lib/types";

// Express names the page and passes its props (src/utils/renderApp.js).
const pages: Record<string, ComponentType<any>> = {
  ide: lazy(() => import("@/pages/Ide")),
  github: lazy(() => import("@/pages/Github")),
  directory: lazy(() => import("@/pages/Directory")),
  login: lazy(() => import("@/pages/auth/Login")),
  signup: lazy(() => import("@/pages/auth/Signup")),
  forgotPassword: lazy(() => import("@/pages/auth/ForgotPassword")),
  verify: lazy(() => import("@/pages/auth/Verify")),
  afterOtp: lazy(() => import("@/pages/auth/AfterOtp")),
  changePassword: lazy(() => import("@/pages/auth/ChangePassword")),
  profile: lazy(() => import("@/pages/account/Profile")),
  editProfile: lazy(() => import("@/pages/account/EditProfile")),
  savedPrograms: lazy(() => import("@/pages/account/SavedPrograms")),
  error: lazy(() => import("@/pages/Error")),
  notFound: lazy(() => import("@/pages/NotFound")),
};

type Boot = { page: string; props: Record<string, unknown> } & PageProps;

function Flash({ flash }: { flash?: string }) {
  const toast = useToast();
  useEffect(() => {
    if (flash === "github-signed-in") toast({ tone: "success", title: "Signed in with GitHub", body: "Repositories now load with your account’s higher API limit." });
  }, [flash, toast]);
  return null;
}

const boot = JSON.parse(document.getElementById("__app")?.textContent ?? "{}") as Boot;
const Page = pages[boot.page] ?? pages.notFound;

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MotionConfig reducedMotion="user">
      <ToastProvider>
        <Suspense fallback={<div className="min-h-dvh" />}>
          <Page {...boot.props} session={boot.session ?? null} />
        </Suspense>
        <Flash flash={boot.flash} />
      </ToastProvider>
    </MotionConfig>
  </StrictMode>,
);
