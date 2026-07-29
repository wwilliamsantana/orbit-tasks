import { Calendar, Globe, Palette, Code2 } from "lucide-react";

export const tasks = [
  {
    id: 1,
    title: "Landing Page Design",
    description: "Create the Hero section for the marketing website.",
    priority: "High",
    dueDate: "Jul 31",
    members: [
      "https://github.com/wwilliamsantana.png",
      "https://github.com/vercel.png",
    ],
    tags: ["Design", "UI"],
    icon: Palette,
    column: "Todo",
  },

  {
    id: 2,
    title: "API Integration",
    description: "Connect authentication endpoints.",
    priority: "Medium",
    dueDate: "Aug 02",
    members: ["https://github.com/vercel.png"],
    tags: ["Backend"],
    icon: Globe,
    column: "In Progress",
  },

  {
    id: 3,
    title: "Dark Mode",
    description: "Implement theme switching.",
    priority: "Low",
    dueDate: "Aug 05",
    members: ["https://github.com/wwilliamsantana.png"],
    tags: ["Feature"],
    icon: Calendar,
    column: "Review",
  },

  {
    id: 4,
    title: "Responsive Layout",
    description: "Improve mobile experience.",
    priority: "High",
    dueDate: "Aug 08",
    members: [
      "https://github.com/vercel.png",
      "https://github.com/wwilliamsantana.png",
    ],
    tags: ["Frontend"],
    icon: Code2,
    column: "Done",
  },
];
