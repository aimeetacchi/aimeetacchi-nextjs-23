import styled from 'styled-components'

// STYLES ===
export const CardStyles = styled.div`
   background-color: ${({ theme }) => theme.body};
   color: ${({ theme }) => theme.text};
   margin: 10px;
   padding: 20px;
   text-align: center;
   border-radius: 30px;

   .languages {
      display: flex;
      gap: 10px;
      justify-content: center;
      margin-bottom: 20px;
   }
`