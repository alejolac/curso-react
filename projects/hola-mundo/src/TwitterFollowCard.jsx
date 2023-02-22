import { useState } from "react"

export function TwitterFollowCard( {children, userName, isFollowing}) {
    const [following, setFollowing] = useState(isFollowing)

    const text = following ? "Siguiendo" : "Seguir"
    const buttonClassName = following 
    ? "tw-followCard-button is-following"
    : "tw-followCard-button"

    const handleClick = () => {
        setFollowing(!following)
    }

    return (
        <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img
                    src={`https://unavatar.io/${userName}`}
                    alt="avatar Twitter"
                    className="tw-followCard-avatar" />

                <div className="tw-followCard-info">
                    <strong>{children}</strong>
                    <span
                        className="tw-followCard-nameUser">{userName}
                    </span>
                </div>
            </header>

            <aside>
                <button 
                    className={buttonClassName}
                    onClick={handleClick}
                >
                    <span className="stopFollowingTrue">{text}</span>
                    <span className="stopFollowing">Dejar de Seguir</span>
                </button>
            </aside>
        </article>
    )
}