import { card } from '../assets';
import styles, { layout } from '../style';
import Button from './Button';

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>Meet Copilot: <br className='sm:block'/> Your AI Email Sidekick</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Guided by cutting-edge technology, Copilot is designed to revolutionize your inbox experience with precision and efficiency.</p>

      <Button styles="mt-10" />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="card" className='w-[80%] h-[80%]'/>
    </div>
  </section>
)

export default CardDeal
