import Paginator from 'components/Paginator'
import PostList from 'components/PostsList'
import PostDetails from 'components/PostDetails'

import * as Style from './styles'

const HomeLayout = () => {
  return (
    <Style.HomeLayout>
      <Style.Container>
        <PostList />
        <PostDetails />
        <Paginator />
      </Style.Container>
    </Style.HomeLayout>
  )
}

export default HomeLayout
