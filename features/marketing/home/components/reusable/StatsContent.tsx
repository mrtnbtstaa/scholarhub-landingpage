const StatsContent = ({ count, title }: { count: number | string; title: string }) => {
  return (
    <div className="text-center">
      {count && <h2 className="text-white text-2xl font-bold">{count}+</h2>}
      {title && <h3 className="text-sm text-gray-400 font-bold">{title}</h3>}
    </div>
  );
};

export default StatsContent;
