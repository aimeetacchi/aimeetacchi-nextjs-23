import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    body: string
    gradientOne: string,
    gradientTwo: string,
    text: string,
    border: string,
    background: string,
  }
}