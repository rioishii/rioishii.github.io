const isBrowser = typeof window !== `undefined`

export const setUser = user => {
  window.localStorage.gatsbyUser = JSON.stringify(user)
}

export const getUser = () => {
  if (window.localStorage.gatsbyUser) {
    let user = JSON.parse(window.localStorage.gatsbyUser)
    return user ? user : {}
  }
  return {}
}

export const isLoggedIn = () => {
  if (!isBrowser) {
    return false
  }

  const user = getUser()
  if (user) {
    return !!user.email
  }
}

export const getCurrentUser = () => isBrowser && getUser()

export const logout = callback => {
  if (!isBrowser) return
  setUser({})
  callback()
}
