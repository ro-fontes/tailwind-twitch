interface IGridDescriptionProps {
  description: string;
}

export function DescriptionGrid({ description }: IGridDescriptionProps) {
  return (
    <div className="flex mt-3 justify-center">
      <p className="flex text-base">{description}</p>
    </div>
  );
}
