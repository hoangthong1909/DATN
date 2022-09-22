import testRepository from './testApi/testRepository'

export default ($axios) => ({
  test: testRepository($axios),
})
