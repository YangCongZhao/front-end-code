const http = (data) => {
  const baseUrl = import.meta.env.VITE_BASE_URL
  return new Promise((resolve, reject) => {
    let options = { ...data }
    delete options.url
    fetch(`${baseUrl}${data.url}`, options)
      .then((response) => response.json())
      .then((result) => {
        resolve(result)
      })
      .catch((error) => {
        reject(error)
      })
  })
}
export default http
