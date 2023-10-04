import Projects from './projects';

const projects = [
  {
    id: 'metal',
    title: 'Metal',
    description: 'deployment tools for smart contract developers',
    url: 'https://metal.build'
  },
  {
    id: 'oa',
    title: 'Over Abstraction',
    description: 'a podcast dissecting solidity development',
    url: 'https://overabstraction.fm'
  },
  { id: 'pod', title: 'pod.xyz', description: 'explore on-chain permissions', url: 'https://pod.xyz' }
];

export default async function Home() {
  return (
    <div className="flex p-8 md:p-16">
      <Projects items={projects} />
    </div>
  );
}
