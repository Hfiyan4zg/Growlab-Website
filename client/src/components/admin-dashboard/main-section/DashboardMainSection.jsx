import { Link } from "react-router-dom";
import { icon } from "../../../constants";
import AdminProfileDisplay from "../../global-component/admin-profile-display/AdminProfileDisplay";

const menus = [
  {
    name: "List UMKM",
    route: "/admin/dashboard/umkm",
  },
  {
    name: "List Testimoni",
    route: "/admin/dashboard/testimoni",
  },
  {
    name: "List FAQ",
    route: "/admin/dashboard/faq",
  },
  {
    name: "List Partner Bisnis",
    route: "/admin/dashboard/partner",
  },
];

function MainSection() {
  return (
    <div className="w-4/5 flex flex-col grow-0 px-28 py-8">
      <AdminProfileDisplay />
      <div className="my-8">
        {menus.map((menu) => (
          <Link
            to={menu.route}
            key={menu.name}
            className="flex justify-between items-center my-4 px-4 py-6 border border-black bg-transparent rounded-lg shadow-lg hover:bg-white hover:font-bold"
          >
            <p>{menu.name}</p>
            <img
              src={icon.chevronSmallDownLight}
              alt="arrow"
              className="-rotate-90"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default MainSection;
