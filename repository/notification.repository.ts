
import Notifications from "../models/notification.model"
interface Prop {
  userid: string;
  title: string;
  message: string;
  reference: string;
  status: string;
  service: string;
  type: string;
}
export async function createNotification({ userid,title ,message, reference, status, service,type }: Prop) {
    const newdate = new Date();
    const create_date = newdate.toISOString();
    try {
        await Notifications.create({
            userid,
            title,
            message,
            type,
            reference,
            status,
            service,
            time: create_date
        })
    } catch (error) {
      console.error(error)
        return true
    }
}