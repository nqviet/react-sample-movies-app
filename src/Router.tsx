import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  PropsWithChildren,
  useCallback,
  ReactElement,
} from 'react'

type RouterContextType = {
  path: string
  search: string
  navigate: (to: string) => void
}

type ActiveRouteContextType = {
  params: Record<string, string>
}

const RouterContext = createContext<RouterContextType>({
  path: '',
  search: '',
  navigate: () => {},
})

const ActiveRouteContext = createContext<ActiveRouteContextType>({ params: {} })

export function useRouter(): RouterContextType {
  return useContext(RouterContext)
}

export function useQueryParams<
  T extends { [K: string]: unknown },
  R = { [P in keyof T]: T[P] | undefined },
>(): R {
  const ctx = useContext(RouterContext)
  const params = new URLSearchParams(ctx.search)
  const result: Record<string, string> = {}

  params.forEach((value, key) => {
    result[key] = value
  })

  return result as R
}

export function useParams<
  T extends { [K: string]: unknown },
  R = { [P in keyof T]: T[P] | undefined },
>(): R {
  const { params } = useContext(ActiveRouteContext)
  const result: Record<string, string> = {}

  Object.keys(params).forEach((param) => {
    result[param] = params[param]
  })

  return result as R
}

export function Route(props: PropsWithChildren<{ path: string }>) {
  return <>{props.children}</>
}

export function Link(props: PropsWithChildren<{ to: string; className?: string }>) {
  const router = useRouter()
  const onClick = (event: React.MouseEvent) => {
    event.preventDefault()
    router.navigate(props.to)
  }
  return (
    <a className={props.className} href={props.to} onClick={onClick}>
      {props.children}
    </a>
  )
}

export function Router(props: PropsWithChildren) {
  const router = useRouter()

  const createRoute = (el: ReactElement) => ({
    path: el.props.path,
    element: el,
  })

  const routes = React.Children.toArray(props.children)
    .filter((el) => React.isValidElement(el))
    .map((el) => el as ReactElement)
    .map(createRoute)

  let activeRouteParams: Record<string, string> = {}

  const matchRoute = routes.find((route) => {
    if (route.path === router.path) {
      return true
    }
    const routePathSegments: string[] = route.path.replace(/(^\/)|(\/$)/, '').split('/')
    const routerPathSegments: string[] = router.path.replace(/(^\/)|(\/$)/, '').split('/')
    if (routePathSegments.length === routerPathSegments.length) {
      const params: Record<string, string> = {}
      let match = true
      routePathSegments.forEach((segment, index) => {
        if (segment.startsWith(':')) {
          const param = segment.slice(1)
          params[param] = routerPathSegments[index]
          return
        }
        match = match && segment === routerPathSegments[index]
      })
      if (match) {
        activeRouteParams = params
      }
      return match
    }
    return false
  })

  const defaultRoute = routes.find((route) => route.path === '*')

  return (
    <ActiveRouteContext.Provider value={{ params: activeRouteParams }}>
      {matchRoute ? matchRoute.element : defaultRoute?.element}
    </ActiveRouteContext.Provider>
  )
}

export function RouterProvider(props: PropsWithChildren) {
  const [path, setPath] = useState(window.location.pathname)
  const [search, setSearch] = useState(window.location.search)

  const navigate = useCallback((to: string): void => {
    window.history.pushState({}, '', to)
    setPath(window.location.pathname)
    setSearch(window.location.search)
  }, [])

  useEffect(() => {
    const onPopState = () => {
      setPath(window.location.pathname)
      setSearch(window.location.search)
    }
    window.addEventListener('popstate', onPopState)
    return () => {
      window.removeEventListener('popstate', onPopState)
    }
  }, [])

  return (
    <RouterContext.Provider value={{ path, search, navigate }}>
      {props.children}
    </RouterContext.Provider>
  )
}

export default {
  useRouter,
  useParams,
  useQueryParams,
  Link,
  Route,
  Router,
}
