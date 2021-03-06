import { css } from "styled-components"

export const navBarStyle = css`
  border-radius: 5px;
  background: ${({ theme }) => theme.elements};
`

export const navBarShadow = css`
  box-shadow: 0px 0px 10px ${({ theme }) => theme.shadow};
`

export const buttonStyle = css`
  border: none;
  border-radius: 3px;
  background: ${({ theme }) => theme.elements};
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  box-shadow: 0px 0px 5px ${({ theme }) => theme.shadow};
`
