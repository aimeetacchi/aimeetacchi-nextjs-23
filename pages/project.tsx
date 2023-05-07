import { useRouter } from 'next/router';

const ProjectPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  // Find the item by ID in the `items` array
  const item = items.find((item) => item.id === Number(id));

  if (!item) {
    // Item not found, you can handle it accordingly (e.g., display an error message)
    return <h1>Item not found</h1>;
  }

  return <h1>Item Page: {item.name}</h1>;
};

export default ProjectPage;