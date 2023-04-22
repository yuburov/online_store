import { CategoryService } from "@/services/categories/category.service";
import Loader from "@/ui/Loader";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";
import cn from "clsx";
import { FiLogIn, FiLogOut } from "react-icons/fi";
import { useAuth } from "@/hooks/useAuth";
import { useActions } from "@/hooks/useActions";

const Sidebar: FC = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["get categories"],
    queryFn: () => CategoryService.getAll(),
    select: ({ data }) => data,
  });

  const { asPath, push } = useRouter();
  const { user } = useAuth();
  const { logout } = useActions();
  return (
    <aside className="h-full bg-secondary flex flex-col justify-between">
      <div>
        {data ? (
          <>
            <div className="text-xl text-white mt-4 mb-6 ml-6">Categories</div>
            <ul>
              {data.map((category) => (
                <li key={category.id}>
                  <Link
                    className={cn(
                      `block text-lg my-3 px-10 hover:text-primary transition-colors duration-200`,
                      asPath === `/category/${category.slug}`
                        ? "text-primary"
                        : "text-white"
                    )}
                    href={`/category/${category.slug}`}
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </>
        ) : (
          <div> Categories not found</div>
        )}
      </div>
      {user ? (
        <button
          onClick={() => logout()}
          className="text-white mt-10 flex items-center ml-10 mb-10"
        >
          <FiLogOut />
          <span className="ml-2">Logout</span>
        </button>
      ) : (
        <button
          onClick={() => push("/auth")}
          className="text-white mt-10 flex items-center ml-10 mb-10"
        >
          <FiLogIn />
          <span className="ml-2">Login</span>
        </button>
      )}
    </aside>
  );
};

export default Sidebar;
