import {
  Building2,
  Briefcase,
  Landmark,
  Globe,
  LineChart,
  Lightbulb,
  TrendingUp,
  ArrowRightLeft,
  Building,
  FileText,
  Wallet,
  ShieldCheck,
} from "lucide-react";

export interface ServiceItem {
  id: number;
  category: string;
  icon: React.ComponentType<{ size?: number | string; className?: string }>;
  image: string;
}

export const servicesData: ServiceItem[] = [
  { id: 1, category: "corporate", icon: Building2, image: "/imges/services/02.webp" },
  { id: 2, category: "projects", icon: Briefcase, image: "/imges/services/03.webp" },
  { id: 3, category: "realestate", icon: Building, image: "/imges/services/04.webp" },
  { id: 4, category: "realestate", icon: ArrowRightLeft, image: "/imges/services/05.webp" },
  { id: 5, category: "islamic", icon: Landmark, image: "/imges/services/06.webp" },
  { id: 6, category: "islamic", icon: Globe, image: "/imges/services/07.webp" },
  { id: 7, category: "investment", icon: LineChart, image: "/imges/services/08.webp" },
  { id: 8, category: "advisory", icon: FileText, image: "/imges/services/09.webp" },
  { id: 9, category: "advisory", icon: Lightbulb, image: "/imges/services/010.webp" },
  { id: 10, category: "advisory", icon: TrendingUp, image: "/imges/services/011.webp" },
  { id: 11, category: "corporate", icon: Wallet, image: "/imges/services/012.webp" },
  { id: 12, category: "advisory", icon: ShieldCheck, image: "/imges/services/013.webp" },
];
