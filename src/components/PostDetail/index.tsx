import { ImageFill } from '@styled-icons/bootstrap/ImageFill'
import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'

import Button from 'components/Button'
import Text from 'components/Text'
import * as Style from './styles'

export type PostDetailProps = {
  thumbnail: string
  author: string
  title: string
}

const PostDetail = (props: PostDetailProps) => (
  <Style.PostDetail>
    <CloseOutline size={36}/>

    <Style.Header>
      <Style.ThumbnailWrapper>
        {props.thumbnail ? (
          <Style.Thumbnail src={props.thumbnail} alt="User thumbnail" />
        ) : (
          <ImageFill size={24} />
        )}
      </Style.ThumbnailWrapper>

      {props.title && <Button asLink noUnderline text={props.author} />}
    </Style.Header>

    <Text type="heading4" content={props.title} />
  </Style.PostDetail>
)

export default PostDetail
