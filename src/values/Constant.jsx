import { IoHome } from "react-icons/io5";
import { IoPersonSharp } from "react-icons/io5";
import { FaBriefcase } from "react-icons/fa";
import { GiAchievement } from "react-icons/gi";
import { RiMailOpenFill } from "react-icons/ri";
import { IoSchoolSharp } from "react-icons/io5";
import { FaGlobe } from "react-icons/fa";
import Foto from "@/assets/amrul.jpg"
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa6";
import { FaGlobeAfrica } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Alquran from "@/assets/alquran.png"
import Undangan from "@/assets/undangan.png"
import Inr from "@/assets/inr-web.png"
import Genbi from "@/assets/genbi.png"
import Godesaku from "@/assets/godesaku.png"

// width drawer
export const drawerWidth = 115;

// menu navbar
export const NavbarMenu = [
  {
    id: 1,
    icon: <IoHome />,
    router: "/",
  },
  {
    id: 2,
    icon: <IoPersonSharp />,
    router: "/about",
  },
  {
    id: 3,
    icon: <FaBriefcase />,
    router: "/portofolio",
  },
  // {
  //   id: 4,
  //   icon: <GiAchievement />,
  //   router: "/awards",
  // },
  {
    id: 5,
    icon: <RiMailOpenFill />,
    router: "/contact",
  },
];

export const Information = [
  { id: 1, title: "7+", description: "PROJECTS COMPLETED" },
  { id: 2, title: "2+", description: "YEARS OF EXPERIENCE" },
  // { id: 3, title: "6+", description: "COMP. I'VE WORKED" },
];

export const Skills = [
  { id: 1, name: "HTML/HTML5", value: "95" },
  { id: 2, name: "CSS/CSS3", value: "95" },
  { id: 3, name: "JAVASCRIPT", value: "85" },
  { id: 4, name: "REACT JS", value: "85" },
  { id: 5, name: "NEXT JS", value: "85" },
  // { id: 6, name: "LARAVEL", value: "90" },
];

export const Timeline = [
  {
    id: 1,
    nama: "INFORMATICS ENGINEERING",
    date: "2021 - PRESENT",
    tempat: "ALAUDDIN STATE ISLAMIC UNIVERSITY OF MAKASSAR",
    jobdesk: "Bachelor's degree",
    icon: IoSchoolSharp,
  },
  {
    id: 2,
    nama: "FRONTEND DEVELOPER",
    date: "MAY 2023 - JULY 2023 (FREELANCE)",
    tempat: "INREADY WORKGROUP",
    jobdesk: "Develop admin portal website.",
    icon: FaBriefcase,
  },
  {
    id: 3,
    nama: "FRONTEND DEVELOPER",
    date: "JULY 2024 - SEP 2024 (FREELANCE)",
    tempat: "GENBI UINAM",
    jobdesk: "Develop websites and admin portal.",
    icon: FaBriefcase,
  },
  {
    id: 4,
    nama: "FRONTEND DEVELOPER",
    date: "NOV 2024 - FEB 2025 (PART TIME)",
    tempat: "GODESAKU - PT HANAN MEDIA SOLUTION",
    jobdesk: "Developing village information website.",
    icon: FaBriefcase,
  },
];

export const PortofolioCard = [
  {
    id: 1,
    nama: "Alquran",
    deskripsi: "Digital Quran website",
    teknologi: "React.js",
    image: Alquran,
    icon: FaGlobe,
    link: 'https://al-quranonline.vercel.app/'
  },
  {
    id: 2,
    nama: "Makkio",
    deskripsi: "Digital invitation website",
    teknologi: "React.js,Material UI",
    image: Undangan,
    icon: FaGlobe,
    link: 'https://undangan-digital-coral.vercel.app/'
  },
  {
    id: 3,
    nama: "Inready Workgroup",
    deskripsi: "admin portal to manage the data",
    teknologi: "React.js, Material UI",
    image: Inr,
    icon: FaGlobe,
    link: 'https://genbiuinam.org/'
  },
  {
    iid: 4,
    nama: "Genbi Uinam",
    deskripsi: "Genbi Uinam Organization Information Website",
    teknologi: "Next.js, Material UI",
    image: Genbi,
    icon: FaGlobe,
    link: 'https://genbiuinam.org/'
  },
  {
    id: 5,
    nama: "Godesaku",
    deskripsi: "Website AlquranA web-based system that provides general information about a village, including articles, tourist spots, population data, and more.",
    teknologi: "React.js, Material UI",
    image: Godesaku,
    icon: FaGlobe,
    link: '/'
  },
];


export const AwardsCard = [
  {id:1,image: Foto,nama: "1st - Science Olympic in Geoscience",deskripsi: "Bulukumba District Education Authorities - Senior High School Science Olympic"},
  {id:2,image: Foto,nama: "Winner - IDCamp Developer Challenge 2022",deskripsi: "Indosat Ooredoo Hutchison - Recover Faster and Rise Stronger with Technology"},
  {id:3,image: Foto,nama: "Winner - IDCamp Developer Challenge 2020",deskripsi: "Indosat Ooredoo Hutchison - Fight the Spread of COVID-19 with Innovation"},
  {id:4,image: Foto,nama: "Winner - Baparekraf Digital Challenge",deskripsi: "Ministry of Tourism and Creative Economy of the Republic of Indonesia - Create Solutions for a Better Indonesia"},
]

export const ContactList = [
  {id:1,icon: IoLocationSharp,title: "Location", deskripsi: "Gowa,Indonesia"},
  {id:2,icon: MdEmail,title: "Email", deskripsi: "amrulahsanullah.aa@gmail.com"},
  {id:3,icon: FaGraduationCap,title: "Education", deskripsi: "UIN Alauddin Makassar, Indonesia"},
  {id:4,icon: FaGlobeAfrica,title: "Languages", deskripsi: "Bahasa Indonesia"},
]

export const ContactIcon = [
  {id:1,icon: AiFillInstagram,link: "https://www.instagram.com/amrulahsanullah07/"},
  {id:2,icon: FaGithub,link: "https://github.com/amrul07"},
  {id:3,icon: FaYoutube,link: "https://www.youtube.com/@amrulahsanullah7083"},
]