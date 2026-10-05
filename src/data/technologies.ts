export type TechGroup = {
  title: string
  items: string[]
}

export const stackGroups: TechGroup[] = [
  {
    title: 'Frontend',
    items: ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    title: 'Backend',
    items: ['Node.js', 'Express.js', 'MongoDB'],
  },
  {
    title: 'Tools',
    items: ['Git', 'GitHub', 'Vercel'],
  },
]
