export function calcStartAmount(widthMode) {
    if (widthMode === 'desktop') {
      return 12;
    } else if (widthMode === 'tablet') {
      return 8;
    } 
    return 5;
  }