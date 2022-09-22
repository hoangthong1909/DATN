import createRepository from '~/api/repositories'
const PREFIX_PROXY = '/api'
const appendProxy = (url) => `${PREFIX_PROXY}${url}`
const appendSlashEnd = (url) =>
  url.charAt(url.length - 1) === '/' ? url : `${url}/`

const prepareUrl = (url) => {
  let result = url
  // append proxy
  result = appendProxy(result)
  // append slash end.
  result = appendSlashEnd(result)
  return result
}

export default ({ $axios, app, store }, inject) => {
  const repositories = $axios.create({
    headers: {
      common: {
        Accept: 'application/json',
      },
    },
  })
  // Here is the magic, onRequest is an interceptor, so every request made will go trough this, and then we try to access app.$auth inside it, it is defined
  repositories.onRequest((config) => {
    // Here we check if user is logged in
    config.url = prepareUrl(config.url)
    // add header project id

    // if (
    //   !config.url.includes('/tenant/project-users') &&
    //   !config.url.includes('/invitation/project-user')
    // ) {
    //   if (store.getters['common/getCurrentProjectId']) {
    //     config.headers = {
    //       ...config.headers,
    //       'project-id': store.getters['common/getCurrentProjectId'],
    //     }
    //   }
    // }

    //     if (app.$auth.loggedIn) {
    //       // If the user is logged in we can now get the token, we get something like `Bearer yourTokenJ9F0JFODJ` but we only need the string without the word **Bearer**, So we split the string using the space as a separator and we access the second position of the array **[1]**
    //       const token = app.$auth.strategy.token.get().split(' ')[1]
    //       repositories.setToken(token, 'Bearer') // Here we specify the token and now it works!!
    //     } else {
    //       repositories.setToken('YWRtaW46YWRtaW4=', 'Bearer')
    //     }
  })

  //   repositories.onResponse((response) => {
  //     console.log(`[${response.status}] ${response.request.path}`)
  //   })

  //   repositories.onError((err) => {
  //     console.log(
  //       `[${err.response && err.response.status}] ${
  //         err.response && err.response.request.path
  //       }`
  //     )
  //     console.log(err.response && err.response.data)
  //   })

  inject('repositories', createRepository(repositories))
}
