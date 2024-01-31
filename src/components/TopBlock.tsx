import { NewsList } from './NewsList'
import { Advertisement } from './Advertisement'

/**
 * Верхний блок над поиском
 */
export const TopBlock = () => {
  return (
    <div className='block top_block'>
      <NewsList/>
      <Advertisement type="card" title="Работа над ошибками" text="Смотрите на Яндексе и запоминайте" src="#" />
    </div>
  )
}
