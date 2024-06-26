const { default: images } = require("./images");
const { default: komunitasPic } = require("./komunitasPic");
const { default: layananPic } = require("./layananPic");
const { default: logo } = require("./logo");
const { default: newsPic } = require("./newsPic");

const dataLayanan = [
  {
    title: "Kelas bisnis",
    navi: "/kelas-bisnis",
  },
  {
    title: "Konsultasi Bisnis",
    navi: "#",
  },
  {
    title: "Buat Website & Aplikasi",
    navi: "/buat-website-dan-aplikasi",
    pic: layananPic.layananWebsiteAplikasi,
    deskripsi:
      "Maksimalkan kehadiran online bisnismu! Tim ahli kami siap membangun website & aplikasi yang memikat, membantu kamu mencapai tujuan digital dengan desain yang responsif dan fungsional",
  },
  {
    title: "Social Media Management",
    navi: "/social-media-management",
    pic: layananPic.socialMediaManagement,
    deskripsi:
      "Raih potensi optimal bisnis kamu dengan layanan Social Media Management kami. Tim ahli kami akan merancang strategi terbaik untuk menjangkau target audiens kamu",
  },
  {
    title: "Desain Logo",
    navi: "/desain-logo",
    pic: layananPic.desainLogo,
    deskripsi:
      "Bangun identitas kuat untuk bisnismu dengan layanan Desain Logo Brand kami. Tim kreatif kami akan menciptakan logo yang unik dan menggambarkan essensi brandmu secara visual",
  },
  {
    title: "Live Streaming & Content",
    navi: "#",
  },
];

const dataKomunitas = [
  {
    title: "Komunitas Bisnis",
    pic: komunitasPic.komunitasBisnis,
    navi: "#",
  },
  {
    title: "Komunitas Content Creator",
    pic: komunitasPic.komunitasKontenCreator,
    navi: "#",
  },
];

const dataKarir = [
  {
    title: "Semangat belajar hal baru tanpa rasa takut",
    pic: images.career_Section_2,
  },
  {
    title: "Komunitas Content Creator",
    pic: images.career_Section_2,
  },
];

const dataService = [
  {
    title: "Kelas Bisnis",
    deskripsi:
      "Kamu bakal belajar banyak hal yang bisa ningkatin omset bisnis kamu",
    pic: images.oriKelasBisnis,
  },
  {
    title: "Konsultasi Bisnis",
    deskripsi:
      "Kamu bakal belajar banyak hal yang bisa ningkatin omset bisnis kamu",
    pic: images.konsultasiBisnis,
  },
  {
    title: "Buat Website & Aplikasi",
    deskripsi: "Kami Selalu Menciptakan Pengalaman Digital yang Terbaik",
    pic: images.buatWebsiteDanAplikasi,
  },
  {
    title: "Social Media Management",
    deskripsi: "Kami Selalu Menciptakan Strategi yang Terbaik",
    pic: images.socialMediaManagement,
  },
  {
    title: "Desain Logo",
    deskripsi:
      "Kamu bakal belajar banyak hal yang bisa ningkatin omset bisnis kamu",
    pic: images.desainLogo,
  },
  {
    title: "Live Streaming & Content",
    deskripsi:
      "Kamu bakal belajar banyak hal yang bisa ningkatin omset bisnis kamu",
    pic: images.liveStreamingDanContent,
  },
];

const navigationData = [
  {
    BUTTON_TEXT: "Layanan",
    data: dataLayanan,
    navi: null,
  },
  {
    BUTTON_TEXT: "Komunitas",
    data: dataKomunitas,
    navi: null,
  },
  {
    BUTTON_TEXT: "Artikel",
    data: null,
    navi: "/artikel/1/Semua",
  },
  {
    BUTTON_TEXT: "Karir",
    data: null,
    navi: "/career",
  },
  {
    BUTTON_TEXT: "Tentang Kami",
    data: null,
    navi: "#",
  },
];

const dataNews = [
  {
    judul: "3 Cara Mengembangkan Bisnis di TikTok Shop",
    tanggal: new Date("11/2/2002"),
    deskripsi:
      "TikTok Shop, salah satu platform e-commerce yang sedang naik daun, telah menjadi fokus utama para pengusaha untuk memperluas jangkauan bisnis mereka. Dengan basis pengguna yang besar dan beragam, TikTok Shop memberikan kesempatan yang luar biasa bagi para pemilik bisnis untuk meningkatkan visibilitas produk mereka",
    images: "rectangle_news_1.png",
  },
  {
    judul: "12 Tren Pemasaran Paling Efektif di 2023",
    tanggal: new Date("11/2/2002"),
    deskripsi:
      "TikTok Shop, salah satu platform e-commerce yang sedang naik daun, telah menjadi fokus utama para pengusaha untuk memperluas jangkauan bisnis mereka. Dengan basis pengguna yang besar dan beragam, TikTok Shop memberikan kesempatan yang luar biasa bagi para pemilik bisnis untuk meningkatkan visibilitas produk mereka",
    images: "rectangle_news_2.png",
  },
  {
    judul: "10 Cara Agar Bisnis Kamu Muncul di Pencarian",
    tanggal: new Date("11/2/2002"),
    deskripsi:
      "TikTok Shop, salah satu platform e-commerce yang sedang naik daun, telah menjadi fokus utama para pengusaha untuk memperluas jangkauan bisnis mereka. Dengan basis pengguna yang besar dan beragam, TikTok Shop memberikan kesempatan yang luar biasa bagi para pemilik bisnis untuk meningkatkan visibilitas produk mereka",
    images: "rectangle_news_3.png",
  },
];

const dataLogoShare = [
  {
    title: "link",
    images: logo.LINK,
    background: "bg-whiteSmoke600",
  },
  {
    title: "linkedin",
    images: logo.LINKEDIN,
    background: "bg-linkedinColor",
  },
  {
    title: "whatsapp",
    images: logo.WHATSAPP,
    background: "bg-greenWhatsapp",
  },
  {
    title: "telegram",
    images: logo.TELEGRAM,
    background: "",
  },
];

module.exports = {
  dataLayanan,
  dataService,
  dataKomunitas,
  navigationData,
  dataNews,
  dataLogoShare,
  dataKarir,
};
