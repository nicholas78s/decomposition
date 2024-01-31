type UserBlocType = {
  title: string;
  src: string;
  children: React.ReactNode;
}

/**
 * Отображение пользовательского блока
 */
export const UserBlock = ({title, src, children}: UserBlocType) => {
  return (
    <div className="user_block">
      <div><a href={src}>{title}</a></div>
      {children}
    </div>
  )
}
