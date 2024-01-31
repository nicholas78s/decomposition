type AdvType = {
  type: string;
  title?: string;
  text?: string;
  src: string;
}

/**
 * Отображение рекламных блоков, баннеров
 */
export const Advertisement = ({type, title, text, src}:AdvType) => {
  if (type === 'banner')
    return (
      <a href={src}>
        <img className="banner" src={src} />
      </a>
    )
  else
    return (
      <div>
        <img src={src} width={120} height={120} />
        <div><a href={src}>{title}</a></div>
        <div>{text}</div>
      </div>
    )
}
