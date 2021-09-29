import { URLType } from 'types/posts'

/**
 * Hook to fetch data from an API
 * @param {string} children - The URL to fetch the data
 * @param {URLType} params - The query params of an URL
 * @returns {string}
 */
export const fetchData = async (url: string, params: URLType) => {
  const buildURLParams = Object.keys(params).reduce((acc, item, index) => {
    if (index === 0) {
      acc += `?${item}=${params[item]}`
    } else {
      acc += `&${item}=${params[item]}`
    }

    return acc
  }, '')

  url += buildURLParams

  return await fetch(url)
    .then((data) => data.json())
    .then((res) => res)
}
