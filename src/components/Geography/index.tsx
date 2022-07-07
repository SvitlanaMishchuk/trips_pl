import { Card } from './../../shared/components/Card';
import { geographyList, GeographyEntity } from './geography';
import './styles.scss';

export const Geography = () => {
  return (
    <div className='geography_container'>
      <h1 className={`text-center geography_title`}>Geography</h1>
      <div className='flex justify-space-between geography_content'>
        {geographyList.map(({ title, image, content }: GeographyEntity) => (
          <Card
            title={title}
            image={image}
            content={content}
            containerClassname={'geography_card'}
          />
        ))}
      </div>
    </div>
  );
};
