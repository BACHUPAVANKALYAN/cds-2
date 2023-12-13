import Notification from "./index.js";

const userNotificationList = [
  {
    uniqueNo: 1,
    imageUrl: "https://assets.ccbp.in/frontend/react-js/primary-icon-img.png",
    name: "Information Message",
  },
  {
    uniqueNo: 1,
    imageUrl: "https://assets.ccbp.in/frontend/react-js/success-icon-img.png",
    name: "Success Message",
  },
  {
    uniqueNo: 1,
    imageUrl: "https://assets.ccbp.in/frontend/react-js/warning-icon-img.png",
    name: "Warning Message",
  },
  {
    uniqueNo: 1,
    imageUrl: "https://assets.ccbp.in/frontend/react-js/danger-icon-img.png",
    name: "Danger Message",
  },
];
const App = () => (
  <div className="list-container">
    <p className="title">Notifications</p>
    <ul>
        <userNotificationList.map((eachUser)=>(
            <Notification userDetails={eachUser} />
        )
    </ul>
  </div>
);

export default App;
