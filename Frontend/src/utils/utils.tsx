
export const getSreenSize = (): ScreenSize => {
    const clientWidth = document.body.clientWidth;
    return clientWidth <= 768 ? ScreenSize.sm : clientWidth <= 1024 ? ScreenSize.md : ScreenSize.lg
}

export enum ScreenSize {
    sm = 'sm',
    md = 'md',
    lg = 'lg'
  }
  