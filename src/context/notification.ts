import { NotificationContextType } from "../types/types";
import createContext from "../utils/createContext";

export const [NotificationProvider, useNotificationContext] = createContext<
  NotificationContextType | undefined
>("Notification", undefined);
