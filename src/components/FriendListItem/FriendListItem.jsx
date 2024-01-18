import css from "./FriendListItem.module.css";

export const FriendListItem = ({ avatar, isOnline, name }) => {
  const statusClass = isOnline ? css.friendGreen : css.friendRed;
  return (
    <div className={css.item}>
      <img
        className={css.avatar}
        src={avatar}
        alt={name + "avatar"}
        width="38"
      />
      <p className={css.name}>{name}</p>
      <p className={statusClass}>{`${isOnline ? "Online" : "Offline"}`}</p>
    </div>
  );
};
