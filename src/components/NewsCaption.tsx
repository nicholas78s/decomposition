type NewsCaptionType = {
  type: string;
  text: string;
  src: string;
}
/**
 * Отображение новости из раздела "Сейчас в СМИ"
 */
export const NewsCaption = ({type, text, src}: NewsCaptionType) => {
  return (
    <div className={'news_caption ' + type}><a href={src}>{text}</a></div>
  )
}
