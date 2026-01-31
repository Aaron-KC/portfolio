import { lazy } from "react";

export const windowRegistry = {
  finder: lazy(() => import("../apps/Finder")),
  contact: lazy(() => import("../apps/Contact")),
  resume: lazy(() => import("../apps/Resume")),
  safari: lazy(() => import("../apps/Safari")),
  photos: lazy(() => import("../apps/Photos")),
  terminal: lazy(() => import("../apps/Terminal")),
  txtfile: lazy(() => import("../apps/Text")),
  imgfile: lazy(() => import("../apps/Image")),
};
