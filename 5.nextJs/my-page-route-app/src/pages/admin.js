import DashboardLayout from "@/components/layout/DashboardLayout";
import { Typography } from "antd";

const AdminPage = () => {
  return <Typography>admin</Typography>;
};

export default AdminPage;

AdminPage.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
