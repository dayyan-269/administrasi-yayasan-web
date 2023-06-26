function Card({ children, title }) {
  return (
    <div className="card bg-white shadow-xl rounded-lg">
      <div className="card-body p-5">
        <h2 className="card-title">{title}</h2>
        {children}
      </div>
    </div>
  );
}

export default Card;
