import { lazy, Suspense } from "react";
import gsap from "gsap";
import Draggable from "gsap/Draggable";
import { ErrorBoundary } from 'react-error-boundary';
import Home from "./components/Home";
import Dock from "./components/Dock"
import Navbar from "./components/Navbar"
import Welcome from "./components/Welcome";
import WindowLoader from "./components/WindowLoader";
import { useWindowStore } from "./store/store";
import { SystemCrash } from "./components/WindowErrorFallback";
import { useMediaQuery } from "./hooks/useMediaQuery";
import { useIsMobileLandscape } from "./hooks/useIsMobileLandscape";
import RotationWarning from "./components/RotationWarning";

const FinderWindow = lazy(() => import("./apps/Finder"));
const ResumeWrapped = lazy(() => import("./apps/Resume"));
const Text = lazy(() => import("./apps/Text"));
const Image = lazy(() => import("./apps/Image"));
const Contact = lazy(() => import("./apps/Contact"));
const Safari = lazy(() => import("./apps/Safari"));
const Photos = lazy(() => import("./apps/Photos"));
const Terminal = lazy(() => import("./apps/Terminal"));

gsap.registerPlugin(Draggable);


const App = () => {
  const { windows } = useWindowStore();
  const isMobileLandscape = useIsMobileLandscape();
  const isDesktop = useMediaQuery('(min-width: 640px)');

  const showWarning = isMobileLandscape;

  if(showWarning) {
    return <RotationWarning />
  }
  return (
    <ErrorBoundary
      FallbackComponent={SystemCrash}
      onError={(error, info) => {
        console.error("CRITICAL SYSTEM ERROR:", error, info);
      }}
    >
      <main>
        <Navbar />
        <Welcome />
        <Dock />
        {
          isDesktop && (
            <>
              {windows.terminal.hasMounted && (
                <Suspense fallback={<WindowLoader />}><Terminal /></Suspense>
              )}

              {windows.resume.hasMounted && (
                <Suspense fallback={<WindowLoader />}><ResumeWrapped /></Suspense>
              )}

              {windows.finder.hasMounted && (
                <Suspense fallback={<WindowLoader />}><FinderWindow /></Suspense>
              )}

              {windows.txtfile.hasMounted && (
                <Suspense fallback={<WindowLoader />}><Text /></Suspense>
              )}

              {windows.imgfile.hasMounted && (
                <Suspense fallback={<WindowLoader />}><Image /></Suspense>
              )}

              {windows.contact.hasMounted && (
                <Suspense fallback={<WindowLoader />}><Contact /></Suspense>
              )}

              {windows.safari.hasMounted && (
                <Suspense fallback={<WindowLoader />}><Safari /></Suspense>
              )}

              {windows.photos.hasMounted && (
                <Suspense fallback={<WindowLoader />}><Photos /></Suspense>
              )}
            </>
          )
        }
        <Home />
      </main>
    </ErrorBoundary>
  )
}

export default App
