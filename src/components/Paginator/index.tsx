import { useDispatch, useSelector } from 'react-redux'

import { selectPostsData, setPosts } from 'store'

import { fetchData } from 'utils/fetchData'

import Button from 'components/Button'

import * as Style from './styles'

const Paginator = () => {
  const dispatch = useDispatch()

  const { paginationAfter, paginationBefore, posts } = useSelector(
    selectPostsData
  )

  const getPreviousPosts = async () => {
    // TODO: Implement the back functionality
  }

  const getNextPosts = async () => {
    if (paginationAfter) {
      const { after, before, posts } = await fetchData(
        'https://www.reddit.com/r/webdev.json',
        {
          after: paginationAfter,
          limit: 10,
          count: 10
        }
      )

      const newPaginationBefore = before
      const newPaginationAfter = after

      dispatch(
        setPosts({
          paginationAfter: newPaginationAfter,
          paginationBefore: newPaginationBefore,
          posts
        })
      )
    }
  }

  return (
    <Style.Paginator>
      {posts.length > 0 && paginationBefore && (
        <Button
          asLink
          color="gray"
          noUnderline
          onClick={() => getPreviousPosts()}
        >
          Previous
        </Button>
      )}

      {posts.length > 0 && (
        <Button asLink color="gray" noUnderline onClick={() => getNextPosts()}>
          Next
        </Button>
      )}
    </Style.Paginator>
  )
}

export default Paginator
