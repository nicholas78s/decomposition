/**
 * Отображение даты и времени
 */
export const CurrentDate = () => {
  const now = new Date();
  
  return (
    <div>{now.toLocaleString('ru-RU', {day: 'numeric', month: 'long', weekday: 'long', hour: '2-digit', minute: '2-digit'})}</div>
  )
}
