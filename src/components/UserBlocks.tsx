import { Broadcast } from "./Broadcast"
import { Popular } from "./Popular"
import { UserBlock } from "./UserBlock"
import { Wheather } from "./Wheather"

/**
 * Отображение группы пользовательских блоков
 */
export const UserBlocks = () => {
  return (
    <div className="user_blocks">
      <UserBlock title="Погода" src="#">
        <Wheather />
      </UserBlock>
      <UserBlock title="Карта Германии" src="#">
        <div>Расписания</div>
      </UserBlock>
      <UserBlock title="Эфир" src="#">
        <Broadcast title="Управление как искусство" channel="Успех" src="#" />
        <Broadcast title="Ночь. Мир в это время" channel="earthTV" src="#" />
        <Broadcast title="Андрей Вознесенский" channel="Совершенно секретно" src="#" />
      </UserBlock>
      <UserBlock title="Посещаемое" src="#">
        <Popular title="Недвижимость" description="о сталинках" />
        <Popular title="Маркет" description="люстры и светильники" />
        <Popular title="Авто.ру" description="привод 4х4 до 500 000" />
      </UserBlock>
      <UserBlock title="Телепрограмма" src="#">
        <Broadcast time="02:00" title="TNT Best" channel="TNT International" />
        <Broadcast time="02:15" title="Джинглики" channel="Карусель INT" />
        <Broadcast time="02:25" title="Наедине со всеми" channel="Первый" />
      </UserBlock>
    </div>
  )
}
