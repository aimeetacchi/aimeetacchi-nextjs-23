import styled from 'styled-components'

// STYLES ===
export const CardStyles = styled.div`
   background-color: ${({ theme }) => theme.body};
   color: ${({ theme }) => theme.text};
   margin: 10px;
   padding: 20px;
   text-align: center;
   border-radius: 30px;

   h2 {
      font-size: 16px;

      @media (min-width: 520px) {
         font-size: 18px;
      }
   }
   p {
      font-size: 14px;
   }
   .languages {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      justify-content: center;
      align-items: center;
      margin-bottom: 20px;

      p {
         font-family: Source Code Pro, monospace;
         font-size: 12px;
      }
      @media (min-width: 520px) {
        
      }
   }
`