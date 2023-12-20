import { useState } from 'react';
import './TwitterFollowCard.css'

export function TwitterFollowCard({ children, userName = 'unknown', initialIsFollowing }) {
  const avatarURL = `https://unavatar.io/${userName}`
  const [isFollowing, setFollowing] = useState(initialIsFollowing)
  const followText = isFollowing ? 'Following' : 'Follow'
  const formatUserName = (e) => {
    return `@${e}`
  }
  const clickHandler = () => {
    setFollowing(!isFollowing)
  }
  const buttonClassName = isFollowing
    ? "tw-followCard-follow-button tw-following"
    : "tw-followCard-follow-button";


  return (
    <section className="tw-followCard">
      <article className="tw-followCard-userInfo">
        <div>
          <img
            className="tw-followCard-userInfo-avatar"
            src={avatarURL}
            alt={`Avatar de ${userName}`}
          />
        </div>
        <div className="tw-followCard-userInfo-data">
          <p>
            <strong>{children}</strong>
          </p>
          <p>{formatUserName(userName)}</p>
        </div>
      </article>
      <article className="tw-followCard-follow">
        <button className={buttonClassName} onClick={clickHandler}>
          <span className="tw-text">{followText}</span>
          <span className="tw-text tw-unfollow">Unfollow</span>
        </button>
      </article>
    </section>
  );
}