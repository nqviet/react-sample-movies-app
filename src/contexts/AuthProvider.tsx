import React, { createContext, PropsWithChildren, useContext } from 'react'

const AuthContext = createContext({
  token: '',
})

export function AuthProvider(props: PropsWithChildren) {
  const value = {
    token: '',
  }

  return <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  return {
    isLoggedIn: !!ctx.token,
    token: ctx.token,
  }
}
