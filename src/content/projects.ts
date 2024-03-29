import { IProjectContent, ProjectStatus } from './types/project'
import project1 from '../assets/project/project-1.webp'
import project2 from '../assets/project/project-2.webp'
import project3 from '../assets/project/project-3.webp'
import project5 from '../assets/project/project-5.webp'
import project6 from '../assets/project/project-6.webp'
import project7 from '../assets/project/project-7.webp'

export const projects: IProjectContent[] = [
  {
    name: 'Prompt Jai',
    status: ProjectStatus.ONGOING,
    image: project7,
    url: 'https://qr.mirailisc.xyz',
    repo: 'https://github.com/Mirailisc/prompt-jai',
  },
  {
    name: '6-number',
    status: ProjectStatus.ONGOING,
    image: project1,
    url: 'https://digits.mirailisc.xyz',
    repo: 'https://github.com/Mirailisc/6-number',
  },
  {
    name: 'Project Comet',
    status: ProjectStatus.ONGOING,
    image: project3,
    url: 'https://mirailisc.xyz',
    repo: 'https://github.com/Mirailisc/project-comet',
  },
  {
    name: 'Yotsuba Bot',
    status: ProjectStatus.ONGOING,
    image: project5,
    repo: 'https://github.com/Mirailisc/Yotsuba',
  },
  {
    name: 'Obamium',
    status: ProjectStatus.STOPPED,
    image: project6,
    repo: 'https://github.com/Mirailisc/test-three-js-react',
  },
  {
    name: 'react-arduino-firebase',
    status: ProjectStatus.STOPPED,
    image: project2,
    repo: 'https://github.com/Mirailisc/react-arduino-firebase',
  },
  {
    name: 'React Native Todo list',
    status: ProjectStatus.STOPPED,
    repo: 'https://github.com/Mirailisc/mira-react-native-expo',
  },
  {
    name: 'Arduino Compose Machine',
    status: ProjectStatus.STOPPED,
    repo: 'https://github.com/Mirailisc/arduino-compose-machine',
  },
  {
    name: 'Genshin Voice Control',
    status: ProjectStatus.STOPPED,
    repo: 'https://github.com/Mirailisc/genshin-voice-control',
  },
  {
    name: 'Genshin Hand Gesture Control',
    status: ProjectStatus.STOPPED,
    repo: 'https://github.com/Mirailisc/genshin-hand-gesture-control',
  },
  {
    name: 'Quandale Dingle',
    status: ProjectStatus.STOPPED,
    repo: 'https://github.com/Mirailisc/quandale-dingle',
  },
]
