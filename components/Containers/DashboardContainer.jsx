function DashboardContainer({ children, className }) {
  return (
    <div className={`w-full flex flex-col px-3 gap-y-6 ${className}`}>
      {children}
    </div>
  );
}

export default DashboardContainer;
