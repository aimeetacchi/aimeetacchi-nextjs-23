import Image from 'next/image'

import { FaReact, FaSketch, FaJira, FaJs, FaHtml5, FaCss3, FaAws, FaNpm, FaYarn, FaSass, FaGithub, FaSourcetree, FaGitSquare } from 'react-icons/fa'
import { SiRedux, SiTypescript, SiStyledcomponents, SiTailwindcss, SiPostman } from 'react-icons/si'
import { GrGraphQl } from 'react-icons/gr'
import { TbBrandNextjs } from 'react-icons/tb'
import { DiBitbucket, DiVisualstudio } from 'react-icons/di';

import materialUiLogo from '../../../public/images/material-ui-logo.png'
import figmaLogo from '../../../public/images/figma-logo.png'
import H4 from '../UI/Typography/H4'
import H3 from '../UI/Typography/H3'
import P from '../UI/Typography/Paragraph';
import { techStackDetails } from '../../Details'
import { RevealWrapper } from 'next-reveal'

const TechStackLogos = () => {
  return (
    <div className="py-10 m-2">
        <RevealWrapper origin='bottom' delay={250} duration={1500} distance='800px' viewOffset={{top:  25,  right:0,  bottom:  10,  left:25}}>
            <H3 className="text-center mb-3 mt-0">{techStackDetails.title}</H3>
        </RevealWrapper>

        <RevealWrapper origin='bottom' delay={250} duration={1500} distance='800px' viewOffset={{top:  25,  right:0,  bottom:  10,  left:25}}>
            <div className="lg:w-9/12 m-auto p-4 my-5 border">
            <H4 className="text-center">{techStackDetails.frontend}</H4>

          
            <div className="lg:flex justify-center items-center gap-14 mt-5 lg:mt-8 mb-0 lg:mb-12">
                <div className="flex justify-center items-center gap-5 mb-5 lg:mb-0">
                    <FaHtml5 className="w-auto h-14 fill-orange-500"/>
                    <P>HTML5</P>
                </div>

                <div className="flex justify-center items-center gap-5 mb-5 lg:mb-0">
                    <FaCss3 className="w-auto h-14 fill-blue-500"/>
                    <P>Css3</P>
                </div>

                <div className="flex justify-center items-center gap-5 mb-5 lg:mb-0">
                    <FaJs className="w-auto h-11 fill-yellow-500"/>
                    <P>Javascript</P>
                </div>

                <div className="flex justify-center items-center gap-5 mb-5 lg:mb-0">
                    <FaSass className="w-auto h-14 fill-pink-500" />
                    <P>Sass</P>
                </div>

            </div>

            <div className="lg:flex justify-center items-center gap-14 lg:mt-8 mb-0 lg:mb-12">

                <div className="flex justify-center items-center gap-5 mb-5 lg:mb-0">
                    <SiStyledcomponents className="w-auto h-14 fill-pink-500" />
                    <P>Styled Components</P>
                </div>

                <div className="flex justify-center items-center gap-5 mb-5 lg:mb-0">
                    <FaReact className="w-auto h-14 fill-blue-400"/>
                    <P>React</P>
                </div>

                <div className="flex justify-center items-center gap-5 mb-5 lg:mb-0">
                    <TbBrandNextjs className="w-auto h-14 fill-gr"/>
                    <P>NextJS</P>
                </div>

                <div className="flex justify-center items-center gap-5 mb-5 lg:mb-0">
                    <SiRedux className="w-auto h-10 fill-purple-500"/>
                    <P>Redux</P>
                </div>
            </div>

            <div className="lg:flex justify-center items-center gap-14 lg:mt-8 mb-8">

                <div className="flex justify-center items-center gap-5 mb-5 lg:mb-0">
                    <SiTypescript className="w-auto h-10 fill-blumb-8e-500"/>
                    <P>Typescript</P>
                </div>

                <div className="flex justify-center items-center gap-5 mb-5 lg:mb-0">
                    <Image className="w-auto h-10" src={materialUiLogo} alt='materialUI logo'/>
                    <P>Material UI</P>
                </div>

                <div className="flex justify-center items-center gap-5 mb-5 lg:mb-0">
                    <SiTailwindcss className="w-auto h-10"/>
                    <P>Tailwind CSS</P>
                </div>
            </div>
            </div>
        </RevealWrapper>


        <RevealWrapper origin='bottom' delay={250} duration={1500} distance='800px' viewOffset={{top:  25,  right:0,  bottom:  10,  left:25}}>
            <div className="lg:flex lg:w-9/12 m-auto gap-8">

            <div className="lg:w-full p-4 my-5 border">
                <H4 className="my-2 text-center mt-0">{techStackDetails.backend}</H4>
                <div className="lg:flex justify-center items-center gap-8
                 mt-5 lg:mt-8 mb-8">
                    <div className="flex justify-center items-center gap-5 mb-5 lg:mb-0">
                        <FaAws className="w-auto h-10 fill-orange-400" />
                        <P>Amplify, AppSync, Cognito, Dynamo, S3</P>
                    </div>

                    <div className="flex justify-center items-center gap-5 mb-5 lg:mb-0">
                        <GrGraphQl className="w-auto h-10 fill-purple-500"/>
                        <P>GraphQL</P>
                    </div>
                </div>
            </div>
            </div>
        </RevealWrapper>

        <RevealWrapper origin='bottom' delay={250} duration={1500} distance='800px' viewOffset={{top:  25,  right:0,  bottom:  10,  left:25}}>
            <div className="lg:flex lg:w-9/12 m-auto gap-8">
            <div className="lg:w-full mx-auto p-4 m-5 border">
                <H4 className="my-2 text-center mt-0">{techStackDetails.design}</H4>
                <div className="lg:flex justify-center items-center gap-14 mt-5 lg:mt-8 mb-8">
                    <div className="flex justify-center items-center gap-5 mb-5 lg:mb-0">
                        <FaSketch className="w-auto h-10 fill-yellow-500" />
                        <P>Sketch</P>
                    </div>
                    <div className="flex justify-center items-center gap-5 mb-5 lg:mb-0">
                        <Image className="w-auto h-10" src={figmaLogo} alt='figma logo'/>
                        <P>Figma</P>
                    </div>
                </div>
            </div>
      
            </div>
        </RevealWrapper>
        
        <RevealWrapper origin='bottom' delay={250} duration={1500} distance='800px' viewOffset={{top:  25,  right:0,  bottom:  10,  left:25}}>
            <div className="lg:w-9/12 mx-auto p-4 m-5 border">
            <H4 className="my-2 text-center mt-0">{techStackDetails.tools}</H4>
            <div className="lg:flex justify-center items-center gap-14 mt-5 lg:mt-8">
                
                <div className="flex flex-wrap justify-center items-center gap-5 mb-5 lg:mb-0">
                    <DiVisualstudio className="w-auto h-12 fill-blue-600"/>
                    <P>VS Code</P>
                </div>

                <div className="flex flex-wrap justify-center items-center gap-5 mb-5 lg:mb-0">
                    <FaSourcetree className="w-auto h-8 fill-blue-500"/>
                    <P>Source Tree</P>
                </div>
            
                <div className="flex justify-center items-center gap-5 mb-5 lg:mb-0">
                    <SiPostman className="w-auto h-10 fill-orange-400" />
                    <P>Postman</P>
                </div>
                
                <div className="flex justify-center items-center gap-5 mb-5 lg:mb-0">
                    <FaNpm className="w-auto h-12 fill-red-600"/>
                    <P>NPM</P>
                </div>
            </div>

            <div className="lg:flex justify-center items-center gap-14 mt-5 lg:mt-8 mb-8">

                <div className="flex justify-center items-center gap-5 mb-5 lg:mb-0">
                    <FaYarn className="w-auto h-12 fill-blue-500"/>
                    <P>Yarn</P>
                </div>

                <div className="flex justify-center items-center gap-5 mb-5 lg:mb-0">
                    <FaGithub className="w-auto h-12"/>
                    <P>Github</P>
                </div>

                <div className="flex justify-center items-center gap-5 mb-5 lg:mb-0">
                    <DiBitbucket className="w-auto h-12 fill-blue-400"/>
                    <P>Bitbucket</P>
                </div>

                <div className="flex justify-center items-center gap-5 mb-5 lg:mb-0">
                    <FaGitSquare className="w-auto h-9"/>
                    <P>Git</P>
                </div>

                <div className="flex justify-center items-center gap-5 mb-5 lg:mb-0">
                    <FaJira className="w-auto h-12 fill-blue-400"/>
                    <P>Jira</P>
                </div>
            </div>

            </div>
        </RevealWrapper>

    </div>
  )
}

export default TechStackLogos