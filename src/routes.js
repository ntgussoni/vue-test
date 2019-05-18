import Payment from "@/views/Payment";
import Success from "@/views/Success";

const routes = [
  { path: "/", redirect: "payment" },
  { path: "/payment", name: "payment", component: Payment },
  { path: "/success", name: "success", component: Success }
];

export default routes;
