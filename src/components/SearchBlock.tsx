import { Logo } from "./Logo"
import { Search } from "./Search"
import { SearchLinks } from "./SearchLinks"

/**
 * Отображение блока поиска
 */
export const SearchBlock = () => {
  return (
    <div className="logo_search_container">
      <Logo />    
      <div className='block search_block'>
        <SearchLinks />
        <Search />
      </div>
    </div>
  )
}
