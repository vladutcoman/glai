interface PageTitleProps {
  title: React.ReactNode;
  description: string;
}

const PageTitle = ({ title, description }: PageTitleProps) => {
  return (
    <div className="w-full flex flex-col justify-start gap-[32px] mt-[120px]">
      {title}
      <p className="text-gray-600 text-lg max-w-[700px] leading-relaxed">{description}</p>
    </div>
  );
};

export default PageTitle;