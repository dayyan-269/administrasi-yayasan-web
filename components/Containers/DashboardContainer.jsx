function DashboardContainer({ children, className }) {
  return (
    <div className={`w-full flex flex-col py-5 px-5 gap-y-3 ${className}`}>{children}</div>
  );
}

export default DashboardContainer;
