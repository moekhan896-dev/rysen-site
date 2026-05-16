export interface ProfileCardProps {
  monogram: string;
  name: string;
  title: string;
  /** Use <em> tags to flag the location (renders italic Fraunces accent). */
  brief: React.ReactNode;
}

/**
 * Profile card. Horizontal layout, yellow monogram on left,
 * content on right. The brief prop accepts inline <em> for italic
 * Fraunces location accent.
 */
export function ProfileCard({ monogram, name, title, brief }: ProfileCardProps) {
  return (
    <article className="profile-card">
      <div className="profile-card__monogram" aria-hidden="true">
        {monogram}
      </div>
      <div className="profile-card__content">
        <h4 className="profile-card__name">{name}</h4>
        <p className="profile-card__title">{title}</p>
        <p className="profile-card__brief">{brief}</p>
      </div>
    </article>
  );
}
