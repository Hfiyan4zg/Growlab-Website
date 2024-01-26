import { Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Komunitas from "../pages/komunitas/Komunitas";
import Protection from "./Protection";
import Artikel from "../pages/artikel/Artikel";
// import OneArtikel from "../pages/artikel/one-artikel/OneArtikel";
import MainSection from "../components/artikel/main-section/MainSection";
import DetailArtikel from "../pages/detail-artikel/DetailArtikel";
import KelasBisnis from "../pages/kelas-bisnis/KelasBisnis";
import DetailKelasBisnis from "../pages/detail-kelas-bisnis/DetailKelasBisnis";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Profile from "../pages/profile/Profile";
import DashboardProfile from "../components/profile/dashboard-profile/dashboardProfile";
import KelasSaya from "../components/profile/kelas-saya/KelasSaya";
import SemuaKelasSection from "./../components/profile/kelas-saya/semua-kelas-section/SemuaKelasSection";
import SedangDipelajariSection from "./../components/profile/kelas-saya/sedang-dipelajari-section/SedangDipelajariSection";
import BelumDimulaiSection from "./../components/profile/kelas-saya/belum-dimulai-section/BelumDimulaiSection";
import SelesaiSection from "./../components/profile/kelas-saya/selesai-section/SelesaiSection";
import Event from "./../components/profile/event/Event";
import Wishlist from "./../components/profile/wishlist/Wishlist";
import Transaksi from "./../components/profile/transaksi/Transaksi";
import TentangKami from "../pages/tentang-kami/TentangKami";
import Career from "../pages/career/Career";
import CareerLowongan from "../pages/career-lowongan/CareerLowongan";
import OneCareerLowongan from "../pages/career-lowongan/one-career-lowongan/OneCareerLowongan";
import DetailProfile from "../pages/detail-profile/DetailProfile";
import UbahProfile from "../pages/ubah-profile/UbahProfile";
import SemuaTransaksi from "../components/profile/transaksi/semua-transaksi/SemuaTransaksi";
import TransaksiBerhasil from "./../components/profile/transaksi/transaksi-berhasil/TransaksiBerhasil";
import TransaksiMenunggu from "../components/profile/transaksi/transaksi-menunggu/TransaksiMenunggu";
import TransaksiDibatalkan from "./../components/profile/transaksi/transaksi-dibatalkan/TransaksiDibatalkan";
// import LihatInvoice from "../components/profile/transaksi/lihat-invoice/LihatInvoice";
import Invoice from "./../pages/invoice/Invoice";
import Checkout from "../pages/checkout/Checkout";
import Approval from "../pages/checkout-approval/Approval";
import Success from "../pages/success-checkout/Success";
import FreeCheckout from "../pages/checkout-free/FreeCheckout";


const routes = [
  <Route
    key="home"
    path="/"
    element={
      <Protection publicSide={true} userOnly={true}>
        <Home />
      </Protection>
    }
  />,
  <Route
    key="artikel"
    path="/artikel/:page"
    element={
      <Protection publicSide={true} userOnly={true}>
        <Artikel />
      </Protection>
    }
  >
    {/* <Route index element={<MainSection />} /> */}
    <Route path=":kategori" element={<MainSection />} />
  </Route>,
  <Route
    key="detail-artikel"
    path="/detail-artikel/:kategori/:title"
    element={
      <Protection publicSide={true} userOnly={true}>
        <DetailArtikel />
      </Protection>
    }
  />,
  <Route
    key="komunitas-konten-kreator"
    path="/komunitas/:title"
    element={
      <Protection publicSide={true} userOnly={true}>
        <Komunitas />
      </Protection>
    }
  />,
  <Route
    key="komunitas-bisnis"
    path="/komunitas/:title"
    element={
      <Protection publicSide={true} userOnly={true}>
        <Komunitas />
      </Protection>
    }
  />,
  <Route
    key="kelas-bisnis"
    path="/kelas-bisnis"
    element={
      <Protection publicSide={true} userOnly={true}>
        <KelasBisnis />
      </Protection>
    }
  />,
  <Route
    key="kelas-bisnis"
    path="/kelas-bisnis/:id"
    element={
      <Protection publicSide={true} userOnly={true}>
        <DetailKelasBisnis />
      </Protection>
    }
  />,
  <Route
    key="login"
    path="/login"
    element={
      <Protection publicSide={true}>
        <Login />
      </Protection>
    }
  />,
  <Route
    key="login"
    path="/register"
    element={
      <Protection publicSide={true}>
        <Register />
      </Protection>
    }
  />,
  <Route
    key="career"
    path="/career"
    element={
      <Protection publicSide={true}>
        <Career />
      </Protection>
    }
  />,

  <Route
    key="kelas-bisnis"
    path="/kelas-bisnis"
    element={
      <Protection publicSide={true}>
        <KelasBisnis />
      </Protection>
    }
  />,

  <Route
    key="careerLowongan"
    path="/career-lowongan"
    element={
      <Protection publicSide={true}>
        <CareerLowongan />
      </Protection>
    }
  />,

  <Route
    key="kelas-bisnis"
    path="/kelas-bisnis/:id"
    element={
      <Protection publicSide={true}>
        <DetailKelasBisnis />
      </Protection>
    }
  />,

  <Route
    key="careerLowongan"
    path="/career-lowongan/:id_lowongan"
    element={
      <Protection publicSide={true}>
        <OneCareerLowongan />
      </Protection>
    }
  />,

  <Route
    key="profile"
    path="/profile/"
    element={
      <Protection userOnly={true}>
        <Profile />
      </Protection>
    }
  >
    <Route index element={<DashboardProfile />} />
    <Route path="dashboard/" element={<DashboardProfile />} />
    <Route path="kelas-saya/" element={<KelasSaya />}>
      <Route index element={<SemuaKelasSection />} />
      <Route path="semua-kelas" element={<SemuaKelasSection />} />
      <Route path="belum-dimulai" element={<BelumDimulaiSection />} />
      <Route path="sedang-dipelajari" element={<SedangDipelajariSection />} />
      <Route path="selesai" element={<SelesaiSection />} />
    </Route>
    <Route path="wishlist/" element={<Wishlist />} />
    <Route path="event/" element={<Event />} />
    <Route path="transaksi/" element={<Transaksi />}>
      <Route index element={<SemuaTransaksi />} />
      <Route path="semua-transaksi" element={<SemuaTransaksi />} />
      <Route path="transaksi-berhasil" element={<TransaksiBerhasil />} />
      <Route path="transaksi-menunggu" element={<TransaksiMenunggu />} />
      <Route path="transaksi-dibatalkan" element={<TransaksiDibatalkan />} />
    </Route>
  </Route>,
  <Route
    key="invoice"
    path="/profile/transaksi/:transaction_id/lihat-invoice"
    element={
      <Protection userOnly={true}>
        <Invoice />
      </Protection>
    }
  />,
  <Route
    key="about-us"
    path="/about-us"
    element={
      <Protection publicSide={true} userOnly={true}>
        <TentangKami />
      </Protection>
    }
  />,

  <Route
    key="login"
    path="/login"
    element={
      <Protection publicSide={true}>
        <Login />
      </Protection>
    }
  />,
  <Route
    key="profile"
    path="/profile"
    element={
      <Protection publicSide={true} userOnly={true}>
        <UbahProfile />
      </Protection>
    }
  >
    <Route path=":username" element={<DetailProfile />} />,
  </Route>,

   <Route
    key="checkout"
    path="/checkout/:id_kelas_bisnis"
    element={
      <Protection userOnly={true}>
        <Checkout />
      </Protection>
    } />,

    <Route
    key="approval"
    path="/checkout/approval-checkout"
    element={
      <Protection userOnly={true}>
        <Approval />
      </Protection>
    }
  />,

  <Route
    key="success"
    path="/checkout/success-checkout"
    element={
      <Protection userOnly={true}>
        <Success />
      </Protection>
    }
  />,

  <Route
    key="free"
    path="/checkout-free/:id_kelas_bisnis"
    element={
      <Protection userOnly={true}>
        <FreeCheckout />
      </Protection>
    }
  />,

];

export default routes;
