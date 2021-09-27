import styled from 'styled-components'
import media from 'styled-media-query'

export const HomeLayout = styled.main.attrs({
  className: 'HomeLayout'
})``

export const Container = styled.div.attrs({
  className: 'Container'
})`
  display: grid;
  grid-template-columns: minmax(380px, 1fr) 2fr;
  width: 100%;
  max-width: 1040px;
  margin: 0 auto;

  ${media.lessThan('medium')`
    grid-template-columns: 1fr;
  `}
`
