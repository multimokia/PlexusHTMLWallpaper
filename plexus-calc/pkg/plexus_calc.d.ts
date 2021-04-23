/* tslint:disable */
/* eslint-disable */
/**
*/
export class Vector {
  free(): void;
/**
* @param {number} ax
* @param {number} ay
* @param {number} bx
* @param {number} by
* @returns {Vector}
*/
  static new(ax: number, ay: number, bx: number, by: number): Vector;
/**
* @returns {number}
*/
  distance(): number;
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly __wbg_vector_free: (a: number) => void;
  readonly vector_new: (a: number, b: number, c: number, d: number) => number;
  readonly vector_distance: (a: number) => number;
}

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {InitInput | Promise<InitInput>} module_or_path
*
* @returns {Promise<InitOutput>}
*/
export default function init (module_or_path?: InitInput | Promise<InitInput>): Promise<InitOutput>;
