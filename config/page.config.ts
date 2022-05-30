/**
 * PAGE SIZE OPTIONS
 */
export const PageSize  = {
  A4:{
    height:3508,
    width:2480
  }
} as const


/**
 * ORIENTATION INTERFACE
 */
export type OrientationInterface = keyof typeof  orientations

/**
 * ORIENTATION OPTIONS
 */
export const orientations = {
  Landscape:"Landscape",
  Portrait:"Portrait"
} as const