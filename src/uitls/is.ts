const toString = Object.prototype.toString;

/**
 * 判断是一个值是否属于某一个类型
 * @param val
 * @param type
 * @returns
 */
export const is = (val: unknown, type: string) =>
  toString.call(val) === `[object ${type}]`;

// 判断是否是函数
export function isFunction<T = Function>(val: unknown): val is T {
  return is(val, "Function");
}
// 是否已经定义
export const isDef = <T = unknown>(val?: T): val is T =>
  typeof val !== "undefined";

//
export const isUnDef = <T = unknown>(val?: T): val is T => !isDef(val);

// 判断是否是对象
export const isObject = (val: any): val is Record<any, any> =>
  val !== null && is(val, "Object");

export const isDate = (val: unknown): val is Date => is(val, "Date");
export const isNumber = (val: unknown): val is number => is(val, "Number");

export const isAsyncFunction = <T = any>(val: unknown): val is Promise<T> =>
  is(val, "AsyncFunction");

export const isPromise = <T = any>(val: unknown): val is Promise<T> =>
  is(val, "Promise") &&
  isObject(val) &&
  isFunction(val.then) &&
  isFunction(val.catch);

export const isString = (val: unknown): val is string => is(val, "String");

export const isBoolean = (val: unknown): val is boolean => is(val, "Boolean");

export const isArray = (val: any): val is Array<any> =>
  val && Array.isArray(val);

//   判断是否是客户端
export const isClient = () => typeof window !== "undefined";

// 判断是否是浏览器
export const isWindow = (val: any): val is Window =>
  typeof window !== "undefined" && is(val, "Window");

export const isElement = (val: unknown): val is Element =>
  isObject(val) && !!val.tagName;

export const isServer = typeof window === "undefined";

export const isImageDom = (img: Element) =>
  img && ["IMAGE", "IMG"].includes(img.tagName);

export const isNull = (val: unknown): val is null => val === null;

export const isNullAndUnDef = (val: unknown): val is null | undefined =>
  isUnDef(val) && isNull(val);

export const isNullOrUnDef = (val: unknown): val is null | undefined =>
  isUnDef(val) || isNull(val);
