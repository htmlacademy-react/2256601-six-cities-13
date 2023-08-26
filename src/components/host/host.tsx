import { Host } from '../../types/offer-card';

type HostProps = {
  host: Host;
  description: string;
}

export function HostComponent ({host, description}: HostProps) {
  const {avatarUrl, isPro, name} = host;

  return (
    <div className="offer__host">
      <h2 className="offer__host-title">Meet the host</h2>
      <div className="offer__host-user user">
        <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
          <img
            className="offer__avatar user__avatar"
            src={avatarUrl}
            width={74}
            height={74}
            alt={name}
          />
        </div>
        <span className="offer__user-name">{name}</span>
        {
          isPro &&
          <span className="offer__user-status">Pro</span>
        }
      </div>
      <div className="offer__description">
        {
          description.split('.').map((sentence) =>
            <p className="offer__text" key={sentence}>{sentence}</p>)
        }
      </div>
    </div>
  );
}
