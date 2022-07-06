import './styles.scss';

interface CardProps {
  title?: string;
  content?: string;
  containerClassname?: string;
}

export const Card = ({
  title,
  content,
  containerClassname = '',
}: CardProps) => {
  return (
    <div className={`card_container text-center ${containerClassname} `}>
      {title && <h3>{title}</h3>}
      {content && <p className={'card_content'}>{content}</p>}
    </div>
  );
};
