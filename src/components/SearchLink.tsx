type SearchLinkType = {
  text: string;
  src: string;
}

/**
 * Отображение ссылки на категорию
 */
export const SearchLink = ({text, src}: SearchLinkType) => {
  return (
    <a href={src}>{text}</a>
  )
}
