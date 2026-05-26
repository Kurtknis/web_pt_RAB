export function SectionHeading({
  kicker,
  title,
  body,
  light = false,
}: {
  kicker: string;
  title: string;
  body?: string;
  light?: boolean;
}) {
  return (
    <div className={`section-heading ${light ? 'section-heading--light' : ''}`}>
      <div>
        <p className="kicker">{kicker}</p>
        <h2>{title}</h2>
      </div>
      {body ? <p>{body}</p> : null}
    </div>
  );
}
