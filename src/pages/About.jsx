import { useParams } from 'react-router-dom'
import Title from '../components/Title'

const About = () => {
  const { parametro } = useParams()

  return (
    <div className='item'>
      <Title text={`About - Parámetro: ${parametro}`} />
    </div>
  )
}

export default About
