/**
 * Returns a query string beginning with "?".
 */
export function getQueryString(params: Record<string, unknown>): string
export function getQueryString(arg?: unknown): any {
  if (typeof arg === 'object' && arg !== null) {
    const search = new URLSearchParams()

    const append = (key: string, value: any): void => {
      if (value === undefined || value === null) return

      if (Array.isArray(value)) {
        // Repeated key, e.g: key=1&key=2
        value.forEach((v) => append(key, v))
      } else if (typeof value === 'object') {
        // Nesting key, e.g: parent[child]=x
        Object.entries(value).forEach(([k, v]) => append(`${key}[${k}]`, v))
      } else {
        search.append(key, String(value))
      }
    }

    Object.entries(arg as Record<string, unknown>).forEach(([k, v]) => append(k, v))

    const qs = search.toString()
    return qs ? `?${qs}` : ''
  }
  return ''
}
