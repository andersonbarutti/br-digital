const FILE_TYPES = ['application/pdf', 'text/csv']

const mapHeaders = response => {
  const headers = {}

  response.headers.forEach((value, key) => {
    headers[key] = value
  })

  return headers
}

const parseBlobResponse = response =>
  // eslint-disable-next-line no-async-promise-executor
  new Promise(async resolve => {
    const blob = await response.blob()

    const reader = new window.FileReader()
    reader.readAsDataURL(blob)

    reader.onloadend = () => {
      resolve({
        headers: mapHeaders(response),
        data: reader.result,
      })
    }
  })

const parseJSONResponse = async response => {
  const headers = mapHeaders(response)
  const data = await response.json()

  if (Array.isArray(data)) {
    const total = Number(headers['x-total-count'])
    return { headers, list: data, total }
  }

  return { headers, data }
}

const parseTextResponse = async response => {
  const headers = mapHeaders(response)
  const data = await response.text()

  return { headers, data }
}

const parseResponse = async response => {
  try {
    const contentType = response.headers.get('content-type').split(';')[0]

    if (FILE_TYPES.indexOf(contentType) > -1) {
      return await parseBlobResponse(response)
    }

    if (contentType.indexOf('text/plain') > -1) {
      return await parseTextResponse(response)
    }

    return await parseJSONResponse(response)
  } catch (err) {
    return response
  }
}

export default parseResponse
