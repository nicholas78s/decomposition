type BroadcastType = {
  title: string;
  channel: string;
  src?: string;
  time?: string;
}

/**
 * Отображение телепрограммы, эфира
 */
export const Broadcast = ({title, channel, src, time}: BroadcastType) => {
  const imgBlock = (src) ? <img src={src} /> : <></>;
  const timeBlock = (time) ? <div className="time">{time}</div> : <></>;
  return (
    <div className="broadcast">
      {imgBlock}
      {timeBlock}
      <div className='title'>{title}</div>
      <div className='channel'>{channel}</div>
    </div>
  )
}
