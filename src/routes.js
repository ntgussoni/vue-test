import Checkout from "@/views/Checkout";
import Success from "@/views/Success";

const routes = [
  { path: "/", redirect: "checkout" },
  { path: "/checkout", name: "checkout", component: Checkout },
  { path: "/success", name: "success", component: Success }
];

export default routes;
