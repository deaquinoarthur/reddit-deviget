import { useState } from 'react'
import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'
import { IosArrowRight } from '@styled-icons/fluentui-system-filled/IosArrowRight'
import { ImageFill } from '@styled-icons/bootstrap/ImageFill'

import Button from 'components/Button'
import Text from 'components/Text'

import timestampToHours from 'utils/timestampToHours'

import * as Style from './styles'

export type PostCardProps = {
  numComments: number
  thumbnail: string
  title: string
  created: number
  author: string
}

const PostCard = (props: PostCardProps) => {
  const [notRead, setNotRead] = useState(true)

  return (
    <Style.PostCard>
      <Style.Header notRead={notRead}>
        <Button asLink color="primary" large noUnderline>
          {props.author}
        </Button>

        <Text type="paragraphRegular" color="gray">
          {timestampToHours(props.created)} hours ago
        </Text>
      </Style.Header>

      <Style.Content>
        <Style.ThumbnailWrapper>
          {props.thumbnail ? (
            <Style.Thumbnail src={props.thumbnail} alt="User thumbnail" />
          ) : (
            <ImageFill size={24} />
          )}
        </Style.ThumbnailWrapper>

        <Text type="paragraphRegular" emphasis>
          {props.title.substr(0, 60)}...
        </Text>

        <IosArrowRight size={36} />
      </Style.Content>

      <Style.Footer>
        <Button asLink icon={<CloseOutline size={24} />}>
          Dismiss Post
        </Button>

        <Button asLink noUnderline>
          {props.numComments} comments
        </Button>
      </Style.Footer>
    </Style.PostCard>
  )
}

export default PostCard
