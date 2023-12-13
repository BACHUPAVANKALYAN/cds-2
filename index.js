const Notification = (props) => {
  const { imageUrl, name } = props;
  const { userNotification } = props;
  return (
    <li className="notification-card-container">
      <img src={imageUrl} className="avatar" alt="avatar" />
      <div className="Notification-details-container">
        <p className="user-name">{name}</p>
      </div>
    </li>
  );
};

ReactDOM.render(element, document.getElementById("root"));
