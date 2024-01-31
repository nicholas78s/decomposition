import { NewsCaptions } from './NewsCaptions'
import { News } from './News'

/**
 * Отображение блока с новостями
 */
export const NewsList = () => {
  return (
    <div className='news_list'>
      <NewsCaptions />
      <div className='container'>
        <News text="Президент упростил получение автомобильных номеров" />
        <News text="В команде президента раскрыли план реформ" />
        <News text="Турпомощь прокомментировала гибель десятков россиян в Анталье" />
        <News text="Суд закрыл демо Демпартии США против России" />
      </div>
    </div>
  )
}
