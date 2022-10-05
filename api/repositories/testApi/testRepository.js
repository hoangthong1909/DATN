import factory from '../factoriesconfig'
const resource = '/rest/user/get-user-list'
export default ($axios) => factory($axios)(resource)
