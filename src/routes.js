// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import Notifications from "@material-ui/icons/Notifications";
import Unarchive from "@material-ui/icons/Unarchive";
// core components/views for Admin layout
import DashboardPage from "pages/Dashboard.js";
import UserProfile from "pages/UserProfile.js";
import TableList from "pages/TableList.js";
import Typography from "pages/Typography.js";
import Icons from "pages/Icons.js";
import BorderColorRoundedIcon from '@material-ui/icons/BorderColorRounded';
import NotificationsPage from "pages/Notifications.js";
import UpgradeToPro from "pages/UpgradeToPro.js";

const dashboardRoutes = [
  {
    path: "/new",
    name: "Nova Ficha",
    icon: BorderColorRoundedIcon,
    component: Typography,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: Dashboard,
    component: DashboardPage,
  },
  {
    path: "/profile",
    name: "Perfil",
    icon: Person,
    component: UserProfile,
  },
  {
    path: "/records",
    name: "Fichas",
    icon: LibraryBooks,
    component: TableList,
  },
  {
    path: "/notifications",
    name: "Notificações",
    icon: Notifications,
    component: NotificationsPage,
  },
  {
    path: "/help",
    name: "Central de Ajuda",
    icon: HelpOutlineIcon,
    component: Icons,
  },
  {
    path: "/upgrade-to-pro",
    name: "Seja PRO",
    icon: Unarchive,
    component: UpgradeToPro,
  }
];

export default dashboardRoutes;
