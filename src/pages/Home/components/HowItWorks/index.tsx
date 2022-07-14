import { Card } from '../../../../shared/components/Card';
import { steps, Step } from './steps';

export const HowItWorks = () => {
  return (
    <div className='px-8 pt-8 lg:pb-4 font-souv '>
      <h1 className='h1 text-center'>How It Works</h1>
      <div className='flex justify-between flex-col lg:flex-row p-8'>
        {steps.map(({ title, content }: Step) => (
          <Card
            key={title}
            containerClassname='border-b last:border-b-0 lg:border-b-0 lg:border-r lg:last:border-r-0 border-dark-secondary '
            title={title}
            content={content}
          />
        ))}
      </div>
    </div>
  );
};
