interface PageHeaderProps {
  title: string;
  subtitle: string;
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <div className="flex flex-col items-center gap-4">
      <h1 className="text-4xl text-center sm:text-6xl font-impact uppercase text-gray-100">
        {title}
      </h1>
      <p className="text-gray-400 text-lg italic">{subtitle}</p>
    </div>
  );
}
