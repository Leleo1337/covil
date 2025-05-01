export type menuProps = {
    isOpen: boolean
    refs: {
        homeSectionRef: React.RefObject<HTMLElement | null>;
        historySectionRef: React.RefObject<HTMLElement | null>
        galerySectionRef: React.RefObject<HTMLElement | null>;
        contactSectionRef: React.RefObject<HTMLElement | null>;
        reserveDivRef: React.RefObject<HTMLDivElement | null>;
      };
    onClick: () => void
}
