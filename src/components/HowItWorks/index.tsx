import { Card } from './../../shared/components/Card';
import { steps, Step } from './steps';
import './styles.scss';

export const HowItWorks = () => {
  return (
    <div className='how-it-works_container'>
      <h1 className='text-center'>How It Works</h1>
      <div className='flex justify-space-between how-it-works_content'>
        {steps.map(({ title, content }: Step) => (
          <Card
            containerClassname='how-it-works_card'
            title={title}
            content={content}
          />
        ))}
      </div>
    </div>
  );
};
