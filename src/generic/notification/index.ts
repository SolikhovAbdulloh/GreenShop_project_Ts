import { notification } from "antd";
type NotificationType = "Success" | "Not";
export const notificationApi = () => {
  const notify = (props: NotificationType) => {
    switch (props) {
      case "Success":
        return notification.success({ message: "Success" });
      case "Not":
        return notification.error({ message: "Error" });
      default:
        break;
    }
  };
  return notify;
};
