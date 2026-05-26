import { company } from '@/content/company';

export function StatsSection() {
  return (
    <section className="section section--ivory stats-strip">
      <div className="luxury-container stats-strip__grid">
        {company.stats.map((stat) => (
          <div key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
