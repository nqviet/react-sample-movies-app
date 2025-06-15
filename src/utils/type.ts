type Primitive = string | number | boolean | bigint | symbol | null | undefined

type AnyFn = (...args: any[]) => any

export type Pretty<T> = T extends Primitive | AnyFn
  ? T
  : T extends readonly (infer U)[]
    ? ReadonlyArray<Pretty<U>>
    : { [K in keyof T]: Pretty<T[K]> }
