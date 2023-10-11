import { features } from '../constants';
import styles, { layout } from '../style';
import Button from './Button'

const Business = () => {
  return (
    <section id = 'features' className = "layout.section" > 
      <div className = {layout.sectionInfo} >
        <h2>
        Get your email done faster and better. <br className='sm:block hidden '>
        Your email sidekick.
        </br> 
        </h2>

      </div>

    </section>
  )
}

export default Business