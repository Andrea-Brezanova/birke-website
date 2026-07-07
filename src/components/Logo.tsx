type LogoProps = {
  className?: string;
  light?: boolean;
};

export function Logo({ className = "", light = false }: LogoProps) {
  const textColor = light ? "text-ivory" : "text-forest";
  const tagColor = light ? "text-sage" : "text-sage";

  return (
    <div className={`leading-none ${textColor} ${className}`} aria-label="Birke Garden Care">
      <span className="font-serif text-[1.65rem] font-medium italic tracking-tight sm:text-[1.85rem]">
        Birke
      </span>
      <span className={`mt-0.5 block text-[0.58rem] font-sans font-semibold uppercase tracking-[0.3em] ${tagColor} sm:text-[0.62rem]`}>
        Garden Care
      </span>
    </div>
  );
}
