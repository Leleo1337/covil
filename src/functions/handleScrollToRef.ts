export function handleScrollToRef(ref: React.RefObject<HTMLElement | null>): void {
   ref.current?.scrollIntoView({
      behavior: "smooth",
   });
}
