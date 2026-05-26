import Link from "next/link";

type RouteStateProps = {
  eyebrow?: string;
  title: string;
  description: string;
  actionLabel?: string;
  actionHref?: string;
};

export function RouteState({
  eyebrow = "Cipta Kreasi Buana",
  title,
  description,
  actionLabel = "Kembali ke Home",
  actionHref = "/",
}: RouteStateProps) {
  return (
    <main className="route-state">
      <section className="route-state__panel" aria-labelledby="route-state-title">
        <p className="kicker">{eyebrow}</p>
        <h1 id="route-state-title">{title}</h1>
        <p>{description}</p>
        <Link className="button button--light" href={actionHref}>
          {actionLabel}
        </Link>
      </section>
    </main>
  );
}

export function RouteLoading() {
  return (
    <main className="route-loading" aria-live="polite" aria-busy="true">
      <div className="route-loading__mark" aria-hidden />
      <p>Menyiapkan halaman...</p>
    </main>
  );
}
