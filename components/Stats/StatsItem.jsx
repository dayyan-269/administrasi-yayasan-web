function StatsItem({
  className = '',
  title = 'title',
  value = 0,
  desc = 'this is the desc',
}) {
  return (
    <div className={`stat place-items-center ${className}`}>
      <div className='stat-title'>{title}</div>
      <div className='stat-value'>{value}</div>
      {/* <div className='stat-desc'>{desc}</div> */}
    </div>
  );
}

export default StatsItem;
