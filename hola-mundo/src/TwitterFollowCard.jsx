import React, { useState } from "react";

export function TwitterFollowCard({ children, userName, name, initialIsFollowing }) { // Agregar 'name' a los props

    const [isFollowing, setIsFollowing] = useState(initialIsFollowing); // Separar useState() con una coma

    const text = isFollowing ? 'Following' : 'Follow';
    const buttonClassName = isFollowing ? 'follow-button following' : 'follow-button';
    const handleClick = () => {
        setIsFollowing(!isFollowing);
    };

    return (
        <article className="tweet tw-followCard">
            <header className="tweet-header tw-followCard-header">
                <img
                    className="avatar tw-followCard-avatar"
                    alt={`Avatar ${name}`} // Utilizar el prop 'name' para el alt del avatar
                    src={`https://unavatar.io/${userName}`}
                />
                <div className="tw-followCard-info">
                    <strong>{name}</strong>
                    <span className="username">@{userName}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick}>{text}</button> {/* Cerrar la llave de onClick */}
            </aside>
        </article>
    );
}
