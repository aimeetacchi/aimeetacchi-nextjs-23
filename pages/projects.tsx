import { RevealWrapper } from 'next-reveal';
import Head from 'next/head'
import datoCmsClient from '../dato-cms';
import Layout from '../src/components/Layout';
import Project from '../src/components/Project';
import H1 from '../src/components/UI/Typography/H1';
import H2 from '../src/components/UI/Typography/H2';
import { datoCmsQuery } from '../src/querys/datoCmsQuery';


interface ProjectsProps {
  allProjects: {
    allProjects: [],
  };
}

export default function ProjectsPage({allProjects}: ProjectsProps) {

  return (
    <>
      <Head>
        <title>Projects | Aimee Tacchi Portfolio 2023</title>
        <meta name="description" content="Aimee Tacchi Portfolio 2023 Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <H1 className="text-center lg:mt-48 mb-12">All Projects</H1>
        { allProjects && (
              <div className="xl:flex xl:justify-center xl:flex-wrap xl:gap-x-8">
                  {
                    allProjects.allProjects.map((project: any, index: number) => (
                      <div key={project.id} className="xl:w-5/12">
                        <Project
                          project={project}
                          index={index}
                        />
                      </div>
                      
                    ))
                  }
              </div>
            )}
      </Layout>
    </>
  )
}

export async function getStaticProps() {

  const allProjects = await datoCmsClient.request(datoCmsQuery);

  return {
      props: {allProjects},
      revalidate: 1,
  };
}
