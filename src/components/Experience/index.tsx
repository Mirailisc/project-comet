import { Typography } from 'antd'
import Work from './Work'
import './exp.scss'
import { workContent } from '../../content/works'
import { IWorkContent } from '../../content/types/work'

const Experience: React.FC = (): JSX.Element => {
  const RenderWorkContents = workContent.map((content: IWorkContent, i: number) => {
    return <Work content={content} key={i} />
  })

  const { Title } = Typography

  return (
    <div className="experience">
      <div className="header">
        <Title level={2} className="text-gradient">
          EXPERIENCE
        </Title>
      </div>
      {RenderWorkContents}
    </div>
  )
}

export default Experience
