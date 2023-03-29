import Image from 'next/image'

import htmlLogo from '../../../public/images/html5-logo.png';
import cssLogo from '../../../public/images/css-logo.png';
import javascriptLogo from '../../../public/images/js-logo.png';
import sassLogo from '../../../public/images/sass-logo.png'
import tailwindLogo from '../../../public/images/tailwind-logo.png'
import reactLogo from '../../../public/images/react-logo.png';
import reduxLogo from '../../../public/images/redux-logo.png'
import styledComponentLogo from '../../../public/images/styled-components-logo.png'
import materialUiLogo from '../../../public/images/material-ui-logo.png'
import graphQLLogo from '../../../public/images/graphql-logo.png'
import awsAmplifyLogo from '../../../public/images/aws-amplify-logo.png'
import typescriptLogo from '../../../public/images/typescript-logo.png'
import nextJsLogo from '../../../public/images/nextjs-logo.png'
import npmLogo from '../../../public/images/npm-logo.png'
import yarnLogo from '../../../public/images/yarn-logo.png'
import vscodeLogo from '../../../public/images/vscode-logo.png'
import gitLogo from '../../../public/images/git-logo.png'
import postmanLogo from '../../../public/images/postman-logo.png'

const TechStackLogos = () => {
  return (
    <>
        <div className="flex flex-wrap justify-center items-center gap-10 mt-10 mb-10">
            <Image className="w-auto h-14" src={htmlLogo} alt='html logo'/>
            <Image className="w-auto h-14" src={cssLogo} alt='css logo'/>
            <Image className="w-auto h-14" src={sassLogo} alt='sass logo'/>
            <Image className="w-auto h-14" src={javascriptLogo} alt='javascript logo'/>
            <Image className="w-auto h-14" src={styledComponentLogo} alt='styled components logo'/>
            <Image className="w-auto h-14" src={materialUiLogo} alt='materialUI logo'/>
            <Image className="w-auto h-14" src={tailwindLogo} alt='tailwind logo'/>
            <Image className="w-auto h-14" src={reactLogo} alt='react logo'/>
            <Image className="w-auto h-14" src={nextJsLogo} alt='nextjs logo'/>
            <Image className="w-auto h-14" src={reduxLogo} alt='redux logo'/>
            <Image className="w-auto h-14" src={typescriptLogo} alt='typescript logo'/>
            <Image className="w-auto h-14" src={graphQLLogo} alt='graphQL logo'/>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-10">
            <Image className="w-auto h-14" src={awsAmplifyLogo} alt='amplify logo'/>
            <Image className="w-auto h-14" src={postmanLogo} alt='postman logo'/>
            <Image className="w-auto h-14" src={gitLogo} alt='git logo'/>
            <Image className="w-auto h-14" src={vscodeLogo} alt='vscode logo'/>
            <Image className="w-auto h-14" src={npmLogo} alt='npm logo'/>
            <Image className="w-auto h-14" src={yarnLogo} alt='yarn logo'/>
        </div>
    </>
  )
}

export default TechStackLogos