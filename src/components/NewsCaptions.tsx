import { NewsCaption } from './NewsCaption'
import { CurrentDate } from './CurrentDate'

/**
 * Отображение блока "Сейчас в СМИ"
 */
export const NewsCaptions = () => {
  return (
    <div className='news_captions'>
      <NewsCaption type="main" text="Сейчас в СМИ" src="#" />
      <NewsCaption type="plain" text="в Германии" src="#" />
      <NewsCaption type="plain" text="Рекомендуем" src="#" />
      <CurrentDate />
    </div>
  )
}
