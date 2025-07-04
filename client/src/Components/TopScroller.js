import { useEffect} from "react";
import { useLocation } from "react-router-dom";
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top
  }, [pathname]); // Run every time the path changes

  return null;
}