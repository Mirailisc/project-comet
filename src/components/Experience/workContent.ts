export const workContent: IWorkContent[] = [
  {
    title: 'Datability',
    date: 'Jul 2021 - Nov 2021',
    position: 'Intern Frontend Developer',
    description: [
      'My job is to develop a CRM website for 3 Small and Medium-sized Enterprise companies with seniors in the company',
      'I work with a few technologies like React, TypeScript, GraphQL, and SASS.',
    ],
  },
  {
    title: 'NUD Channel',
    date: 'Jul 2022 - Present',
    position: 'Frontend Engineer',
    description: [
      'My job is to develop and maintain every front-end application',
      'I also teach my junior about basic web development and JavaScript',
      'I work with a lot of technologies like Nuxt, TypeScript, GraphQL, Docker, Kubernetes and GitLab',
    ],
  },
]

export interface IWorkContent {
  title: string
  date: string
  position: string
  description?: string[]
}
