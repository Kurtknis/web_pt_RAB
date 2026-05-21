import { portfolioItems } from './portfolioContent';

const projects = portfolioItems.map((project) => ({
  ...project,
  coverImage: project.images?.[0],
  image: project.images?.[0],
}));

export default projects;
export { projects };
