import axios from 'axios'

const request = axios.create({
  baseURL: 'http://localhost:3001',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
})

const createError = (code, resp) => {
  const err = new Error(resp.message)
  err.code = code
  return err
}

const handleRequest = ({status, data, ...rest}) => {
  if (status === 200) {
    return data
  } else {
    throw createError(status, rest)
  }
}

export default {
  async getRequest (apiPath, params) {
    return handleRequest(
      await request.get(apiPath, params)
    )
  },

  async postRequest (apiPath, params) {
    return handleRequest(
      await request.post(apiPath, params)
    )
  },

  async putRequest (apiPath, params) {
    return handleRequest(
      await request.put(apiPath, params)
    )
  },

  async delRequest (apiPath, params) {
    return handleRequest(
      await request.delete(apiPath, params)
    )
  },

  async patchRequest (apiPath, params) {
    return handleRequest(
      await request.patch(apiPath, params)
    )
  }
}
