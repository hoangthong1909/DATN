export default ($axios) => (resource) => ({
  all(config = {}) {
    return $axios.get(`${resource}`, config)
  },

  index(config = {}) {
    return $axios.$get(`${resource}`, config)
  },

  create(payload, config = {}) {
    return $axios.$post(`${resource}`, payload, config)
  },

  action(id, action, payload, config = {}) {
    return $axios.$post(`${resource}/${id}/${action}/`, payload, config)
  },

  show(id, config = {}) {
    return $axios.$get(`${resource}/${id}/`, config)
  },

  update(payload, id, config = {}) {
    return $axios.$put(`${resource}/${id}`, payload, config)
  },

  patch(payload, id, config = {}) {
    return $axios.$patch(`${resource}/${id}`, payload, config)
  },

  delete(id, config = {}) {
    return $axios.$delete(`${resource}/${id}`, config)
  },
  metrics(id, metric, end, start, config = {}) {
    return $axios.$get(
      `${resource}/${id}/metrics/?metric=${metric}&end=${end}&start=${start}`,
      config
    )
  },
  metricSchema(config = {}) {
    return $axios.$get(`${resource}/metrics-schema`, config)
  },
  post(path, payload, config = {}) {
    return $axios.$post(`${resource}/${path}`, payload, config)
  },
  postChild(id, child, payload, config = {}) {
    return $axios.$post(`${resource}/${id}/${child}/`, payload, config)
  },
})
