export type Project = {
  title: string
  category: string
  description: string
  context: string
  tags: string[]
  accent: string
  layout: 'left' | 'right' | 'feature'
  image?: string
  liveDemo?: string
  sourceCode?: string
}

export const projects: Project[] = [
  {
    title: 'KuraReady',
    category: 'Civic-tech experience',
    description:
      'A civic-tech project focused on helping users access useful election information and prepare for election day.',
    context:
      'The work emphasizes practical problem solving, a user-focused interface, and a responsive information architecture built around real-world needs.',
    tags: ['UX thinking', 'Responsive UI', 'Content structure'],
    accent: '#4F7CFF',
    layout: 'left',
    image: '/images/kuraready.jpeg',
    liveDemo: 'https://kuraready.vercel.app/',
    sourceCode: undefined,
  },
  {
    title: 'Where Did It Go?',
    category: 'Spending awareness tool',
    description:
      'A practical spending-awareness application designed to help users understand where their money goes and explore different spending scenarios.',
    context:
      'This concept uses interactive UI patterns, state-driven updates, and user input to make everyday financial decisions more understandable.',
    tags: ['State handling', 'User input', 'Practical UX'],
    accent: '#8EA7FF',
    layout: 'right',
    image: '/images/wherediditgo.jpeg.jpeg',
    liveDemo: 'https://where-did-it-go-ten.vercel.app/',
    sourceCode: undefined,
  },
  {
    title: 'Can I Trust This Seller?',
    category: 'Decision-support interface',
    description:
      'A seller-risk checking application designed to help users evaluate online sellers using available information and identify potential warning signs.',
    context:
      'The interface focuses on decision-making flows, visual feedback, risk logic, and clearing the path to a confident answer.',
    tags: ['Risk logic', 'Visual feedback', 'UX clarity'],
    accent: '#7CA6FF',
    layout: 'feature',
    image: '/images/cithis seller.jpeg',
    liveDemo: 'https://can-i-trust-this-seller.vercel.app/',
    sourceCode: undefined,
  },
  {
    title: 'Akiba',
    category: 'Savings and lending concept',
    description:
      'A savings and group-lending application concept designed around contributions, savings and lending within groups.',
    context:
      'This project explores product thinking and financial workflow design, with a focus on usability and clarity in a more complex system.',
    tags: ['Product thinking', 'Workflow UX', 'Financial product'],
    accent: '#9BB4FF',
    layout: 'left',
    liveDemo: undefined,
    sourceCode: undefined,
  },
  {
    title: 'Movie Verse',
    category: 'API-powered discovery app',
    description:
      'A movie discovery application using external movie data.',
    context:
      'The experience is built around API integration, browsing, responsive layouts and dynamic data presentation for a smooth discovery flow.',
    tags: ['API integration', 'Search', 'Dynamic content'],
    accent: '#4F7CFF',
    layout: 'right',
    image: '/images/moviee.jpeg',
    liveDemo: 'https://movie-verse-one-pi.vercel.app/',
    sourceCode: undefined,
  },
  {
    title: 'YouTube Clone',
    category: 'Media-focused UI study',
    description:
      'A YouTube-inspired video platform interface.',
    context:
      'The project focuses on responsive layouts, reusable components, media-heavy browsing, and a clean navigation system inspired by a familiar product.',
    tags: ['Reusable UI', 'Navigation', 'Media layout'],
    accent: '#8EA7FF',
    layout: 'feature',
    image: '/images/ytclone.jpeg',
    liveDemo: 'https://youtube-clone-pink-pi.vercel.app/',
    sourceCode: undefined,
  },
]
