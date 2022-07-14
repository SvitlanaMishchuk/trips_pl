import { Card } from '../../../../shared/components/Card';
import { geographyList, GeographyEntity } from './geography';

export const Geography = () => {
  return (
    <div className='py-10 px-8 bg-secondary font-souv'>
      <h1 className='h1 text-center mb-8'>Geography</h1>
      <div className='flex justify-between flex-col lg:flex-row'>
        {geographyList.map(({ title, image, content }: GeographyEntity) => (
          <Card
            key={title}
            title={title}
            image={image}
            content={content}
            containerClassname={'bg-white'}
          />
        ))}
      </div>
    </div>
  );
};
