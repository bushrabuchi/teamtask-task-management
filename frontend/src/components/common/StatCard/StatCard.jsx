import "./StatCard.scss";

function StatCard({ label, value, icon: Icon, description }) {
  return (
    <article className="stat-card">
      <div className="stat-card-header">
        <span>{label}</span>

        <div className="stat-card-icon">
          <Icon size={20} />
        </div>
      </div>

      <strong className="stat-card-value">{value}</strong>

      {description && <p className="stat-card-description">{description}</p>}
    </article>
  );
}

export default StatCard;
