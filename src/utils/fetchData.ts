import { URLType } from 'types/posts'

/**
 * Hook to fetch data from an API and build a list with
 * only needed attributes.
 *
 * @param {string} children - The URL to fetch the data
 * @param {URLType} params - The query params of an URL
 * @returns {string}
 */

const postsWithOnlyNeededProperties = (dataFromResponse: any) => {
  return dataFromResponse.map((item: typeof dataFromResponse) => ({
    author: item.data.author,
    clicked: item.data.clicked,
    created: item.data.created,
    id: item.data.id,
    name: item.data.name,
    numComments: item.data.num_comments,
    thumbnail: item.data.thumbnail,
    title: item.data.title
  }))
}

export const fetchData = async (url: string, params: URLType) => {
  const buildURLParams = Object.keys(params).reduce(
    (queryParams, item, index) => {
      if (index === 0) {
        queryParams += `?${item}=${params[item]}`
      } else {
        queryParams += `&${item}=${params[item]}`
      }

      return queryParams
    },
    ''
  )

  url += buildURLParams

  const response = await fetch(url)
    .then((data) => data.json())
    .then((res) => {
      return postsWithOnlyNeededProperties(res.data.children)
    })

  return {
    posts: response
  }
}
