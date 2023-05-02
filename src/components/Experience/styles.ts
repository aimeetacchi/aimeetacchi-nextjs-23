import styled from 'styled-components'

// STYLES ===
export const ExperienceStyles = styled.div`
   /* background-color: ${({ theme }) => theme.body}; */
   color: ${({ theme }) => theme.text};
   margin: 10px;
  
   text-align: center;
   border-radius: 30px;
  
   @media (min-width: 720px) {
      padding: 20px 100px;
   }

`