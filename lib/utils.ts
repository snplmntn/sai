import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// smooth scroll to anchors while keeping a fixed offset for the navbar
export const smoothScrollTo = (
  e: React.MouseEvent<HTMLAnchorElement>,
  href: string,
) => {
  e.preventDefault();
  const targetId = href.replace("#", "");
  const elem = document.getElementById(targetId);
  if (elem) {
    const offset = 100;
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = elem.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
};
