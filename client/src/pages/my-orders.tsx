import { OrderService } from "@/services/orders/order.service";
import Heading from "@/ui/Heading";
import Loader from "@/ui/Loader";
import Meta from "@/ui/Meta";
import Layout from "@/ui/layout/Layout";
import { convertPrice } from "@/utils/convertPrice";
import { useQuery } from "@tanstack/react-query";
import { NextPageAuth } from "../providers/auth-provider/auth-page.interface";

const MyOrdersPage: NextPageAuth = () => {
  const { data: orders, isLoading } = useQuery({
    queryKey: ["my orders"],
    queryFn: () => OrderService.getAll(),
    select: ({ data }) => data,
  });
  return (
    <Meta title="My Orders">
      <Layout>
        <Heading>My orders</Heading>
        <section className="relative">
          {isLoading ? (
            <div className="absolute left-[48%] top-52">
              <Loader />
            </div>
          ) : orders?.length ? (
            orders.map((order) => (
              <div
                className="bg-white shadow rounded-lg flex gap-10 p-7 my-7"
                key={order.id}
              >
                <span>#{order.id}</span>
                <span>{order.status}</span>
                <span>{new Date(order.createdAt).toLocaleString("ru-Ru")}</span>
                <span>{convertPrice(order.total)}</span>
              </div>
            ))
          ) : (
            <div>Orders not found</div>
          )}
        </section>
      </Layout>
    </Meta>
  );
};

MyOrdersPage.isOnlyUser = true

export default MyOrdersPage;
