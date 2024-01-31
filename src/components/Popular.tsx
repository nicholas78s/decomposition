type PopularType = {
  title: string;
  description: string;
}

/**
 * Отображение ссылки "Посещаемое"
 */
export const Popular = ({title, description}: PopularType) => {
  return (
    <div className="popular">
      <div className='title'>{title}</div>
      <div className='description'>- {description}</div>
    </div>
  )
}
