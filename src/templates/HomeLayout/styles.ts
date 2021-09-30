import styled from 'styled-components'
import media from 'styled-media-query'

export const HomeLayout = styled.main.attrs({
  className: 'HomeLayout'
})`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100vh;

  ${media.lessThan('medium')`
    display: block;
  `}
`

export const Container = styled.div.attrs({
  className: 'HomeLayout__Container'
})`
  position: relative;

  display: grid;
  grid-template-columns: 1fr;

  height: 100vh;

  ${media.greaterThan('medium')`
    grid-template-columns: minmax(380px, 1fr) 2fr;

    width: 100%;
    height: 80vh;
    max-width: 1040px;
    border-radius: 8px;

    box-shadow: 0 0 24px rgba(0, 0, 0, 0.4);
    overflow: hidden;
  `}
`
