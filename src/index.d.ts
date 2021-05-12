export type BooleanKeys<T> = {
  [P in keyof T]?: T[P] extends any[]
    ? QueryOptions<T[P][0]>
    : T[P] extends Record<string, any>
    ? BooleanKeys<T[P]>
    : boolean;
};

export interface QueryOptions<T> {
  where?: (object: T) => boolean;
  keys: BooleanKeys<T>;
}

export function arrayQL<T, R = any>(
  array: T[],
  queryOptions: QueryOptions<T>
): R;