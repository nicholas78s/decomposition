import { SearchLink } from './SearchLink'

/**
 * Отображение блока с категориями
 */
export const SearchLinks = () => {
  return (
    <div className='search_links'>
      <SearchLink text="Видео" src="#"/>
      <SearchLink text="Картинки" src="#"/>
      <SearchLink text="Новости" src="#"/>
      <SearchLink text="Карты" src="#"/>
      <SearchLink text="Маркет" src="#"/>
      <SearchLink text="Переводчик" src="#"/>
      <SearchLink text="Эфир" src="#"/>
      <SearchLink text="ещё" src="#"/>
    </div>
  )
}
