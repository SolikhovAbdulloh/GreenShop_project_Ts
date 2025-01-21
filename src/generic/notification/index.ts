import { notification } from "antd";
type NotificationType = "Success" | "Not" | "LoginGoogle" | "RegisterGoogle"|"Not register"|"Not login"|'Like'|'Dislike'
export const notificationApi = () => {
  const notify = (props: NotificationType) => {
    switch (props) {
      case "Success":
        return notification.success({ message: "Success" });
      case "Not":
        return notification.error({ message: "Error" });
      case "LoginGoogle":
        return notification.success({ message: "Success login" });
      case "RegisterGoogle":
        return notification.success({ message: "Success register" });
      case "Not register":
        return notification.error({ message: "Error register" });
      case "Not login":
        return notification.error({ message: "Error login" });
      case "Like":
        return notification.success({ message: "Add liked" });
      case "Dislike":
        return notification.info({ message: "Delete like" });
    }
  };
  return notify;
};
