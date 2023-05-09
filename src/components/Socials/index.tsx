import React from 'react'
import { SocialStyle } from './styles'

import { socialMediaItems, iconMapping } from '../../Details';
import { RevealWrapper } from 'next-reveal';

const Socials = () => {
  return (
      <SocialStyle>
        
          {socialMediaItems.map((item) => {
          const Icon = iconMapping[item.name];
          return (
            <a key={item.name} href={item.url} target="_blank" rel="noreferrer">
              <Icon />
            </a>
          );
        })}
      </SocialStyle>                                      
  )
}

export default Socials