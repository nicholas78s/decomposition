type NewsType = {
  text: string;
}
/**
 * Отображение новости
 */
export const News = ({text}: NewsType) => {
  return (
    <div className="news">
      <img width={30} height={30} src="" alt="news icon" />
      <div>{text}</div>
    </div>
  )
}
