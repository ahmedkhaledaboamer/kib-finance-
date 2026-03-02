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
  { id: 1, category: "corporate", icon: Building2, image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&q=80" },
  { id: 2, category: "projects", icon: Briefcase, image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80" },
  { id: 3, category: "realestate", icon: Building, image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80" },
  { id: 4, category: "realestate", icon: ArrowRightLeft, image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80" },
  { id: 5, category: "islamic", icon: Landmark, image: "https://images.unsplash.com/photo-1564769625905-50e93615e769?w=800&q=80" },
  { id: 6, category: "islamic", icon: Globe, image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5eb19?w=800&q=80" },
  { id: 7, category: "investment", icon: LineChart, image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80" },
  { id: 8, category: "advisory", icon: FileText, image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80" },
  { id: 9, category: "advisory", icon: Lightbulb, image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80" },
  { id: 10, category: "advisory", icon: TrendingUp, image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80" },
  { id: 11, category: "corporate", icon: Wallet, image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&q=80" },
  { id: 12, category: "advisory", icon: ShieldCheck, image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80" },
];
