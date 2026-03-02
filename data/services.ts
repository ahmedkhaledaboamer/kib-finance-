import {
  Building2,
  Briefcase,
  Landmark,
  Globe,
  LineChart,
  Lightbulb,
  TrendingUp,
  ShieldCheck,
  Users,
  Ship,
  Truck,
  Factory,
  Cpu,
  PieChart,
  Wallet,
  CreditCard,
  BarChart3,
  FileText,
  Scale,
  Gem,
  Network,
  Rocket,
  Handshake,
  MonitorSmartphone,
  MapPin,
  Anchor,
  Boxes,
  ArrowRightLeft,
  Building,
} from "lucide-react";

export interface ServiceItem {
  id: number;
  titleAr: string;
  descAr: string;
  items: string[];
  category: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  image: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: 1,
    titleAr: "تمويل الشركات",
    descAr: "حلول مالية تدعم النمو المؤسسي.",
    items: ["رأس المال العامل", "التوسع التشغيلي", "إعادة الهيكلة", "دعم التدفقات"],
    category: "corporate",
    icon: Building2,
    image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&q=80",
  },
  {
    id: 2,
    titleAr: "تمويل المشاريع",
    descAr: "تمويل متكامل للمشاريع التجارية والصناعية.",
    items: ["خطوط الإنتاج", "المعدات", "البنية التشغيلية", "التأسيس"],
    category: "projects",
    icon: Briefcase,
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
  },
  {
    id: 3,
    titleAr: "تمويل عقاري",
    descAr: "حلول تمويل عقاري للمشاريع السكنية والتجارية.",
    items: ["شراء العقارات", "التطوير", "إعادة التمويل", "تمويل الأراضي"],
    category: "realestate",
    icon: Building,
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
  },
  {
    id: 4,
    titleAr: "تمويل تجاري",
    descAr: "دعم عمليات البيع والشراء داخل الدولة وخارجها.",
    items: ["الصفقات", "الموردين", "العملاء", "التوريد"],
    category: "realestate",
    icon: ArrowRightLeft,
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
  },
  {
    id: 5,
    titleAr: "تمويل إسلامي",
    descAr: "منتجات متوافقة مع أحكام الشريعة.",
    items: ["مرابحة", "مضاربة", "إجارة", "استصناع"],
    category: "islamic",
    icon: Landmark,
    image: "https://images.unsplash.com/photo-1564769625905-50e93615e769?w=800&q=80",
  },
  {
    id: 6,
    titleAr: "اعتمادات خارجية",
    descAr: "حلول آمنة للتجارة الدولية.",
    items: ["اعتمادات مستندية", "ضمانات الشحن", "تمويل الاستيراد", "تمويل التصدير"],
    category: "islamic",
    icon: Globe,
    image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5eb19?w=800&q=80",
  },
  {
    id: 7,
    titleAr: "تمويل استثماري",
    descAr: "ربط المشاريع الاستثمارية بالممولين المناسبين.",
    items: ["المشاريع الكبرى", "التحالفات", "التطوير العقاري", "المحافظ"],
    category: "investment",
    icon: LineChart,
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
  },
  {
    id: 8,
    titleAr: "استشارات مالية",
    descAr: "تحليل مالي متخصص يدعم اتخاذ القرار.",
    items: ["تقييم المخاطر", "الخطط التمويلية", "تحليل التدفقات", "مراجعة الهياكل"],
    category: "advisory",
    icon: FileText,
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
  },
  {
    id: 9,
    titleAr: "تمويل رواد الأعمال",
    descAr: "حلول تدعم الابتكار وبناء المشاريع الجديدة.",
    items: ["التأسيس", "التشغيل", "التوسع", "دعم الشركات الناشئة"],
    category: "advisory",
    icon: Lightbulb,
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80",
  },
  {
    id: 10,
    titleAr: "تمويل التوسع",
    descAr: "تمويل يرفع قدرة الشركات على النمو المؤسسي.",
    items: ["الفروع الجديدة", "خطوط الإنتاج", "التحول الرقمي", "التطوير الداخلي"],
    category: "advisory",
    icon: TrendingUp,
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80",
  },
];

export const categories = [
  { id: "all", label: "الكل" },
  { id: "corporate", label: "تمويل الشركات" },
  { id: "projects", label: "المشاريع والصناعة" },
  { id: "realestate", label: "عقاري وتجاري" },
  { id: "islamic", label: "إسلامي ودولي" },
  { id: "investment", label: "استثمار وشراكات" },
  { id: "advisory", label: "استشارات وتطوير" },
];
