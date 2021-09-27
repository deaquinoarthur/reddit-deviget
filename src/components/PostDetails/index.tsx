import { useDispatch, useSelector } from 'react-redux'
import { ImageFill } from '@styled-icons/bootstrap/ImageFill'
import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'

import { selectPostDetails, setPostDetails } from 'store'

import Button from 'components/Button'
import Text from 'components/Text'
import * as Style from './styles'

const PostDetails = () => {
  const dispatch = useDispatch()
  const postDetails = useSelector(selectPostDetails)
  const {
    data,
    data: { author, thumbnail, title },
    showDetails
  } = postDetails

  return (
    <Style.PostDetails showDetails={showDetails!}>
      {console.log(postDetails)}
      <CloseOutline
        size={36}
        onClick={() => dispatch(setPostDetails({ data, showDetails: false }))}
      />

      <Style.Header>
        {author !== '' && (
          <Style.ThumbnailWrapper>
            {thumbnail ? (
              <Style.Thumbnail src={thumbnail} alt="User thumbnail" />
            ) : (
              <ImageFill size={24} />
            )}
          </Style.ThumbnailWrapper>
        )}

        {title && <Button asLink noUnderline text={author} />}
      </Style.Header>

      <Text type="heading4" content={title} />
    </Style.PostDetails>
  )
}

export default PostDetails
