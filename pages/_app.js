import { NotificationContainer } from "react-notifications";
import "react-notifications/lib/notifications.css";
import '../styles/main.scss'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NotificationContainer />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
