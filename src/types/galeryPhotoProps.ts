export type galeryPhotoProps = {
    id: number
    img: string
    text: string
    toggleFullscreen: () => void
    closeFullscreen: () => void
    fullscreen: boolean
}