import projects from './projects';

const gallery = projects.flatMap((project) =>
  (project.images || []).slice(0, 4).map((image, index) => ({
    id: `${project.id}-${index}`,
    title: project.title,
    category: project.category,
    image,
  }))
);

export default gallery;
export { gallery };
