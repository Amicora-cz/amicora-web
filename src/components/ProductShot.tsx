import type { CSSProperties } from "react";

type ProductShotProps = {
  src: string;
  alt: string;
  href: string;
  label: string;
  wide?: boolean;
  lektori?: boolean;
  style?: CSSProperties;
};

export function ProductShot({
  src,
  alt,
  href,
  label,
  wide = false,
  lektori = false,
  style,
}: ProductShotProps) {
  const className = ["card", "shot", wide ? "shot-wide" : "", lektori ? "shot-lektori" : ""]
    .filter(Boolean)
    .join(" ");

  return (
    <figure className={className} style={style}>
      <div className="mock-bar">
        <span />
        <span />
        <span />
        <span className="mono">{label}</span>
      </div>
      <a href={href} rel="noopener noreferrer">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} width={935} height={916} alt={alt} />
      </a>
    </figure>
  );
}
