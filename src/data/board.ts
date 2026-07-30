import { Column } from "@/types/task";

export const initialBoard: Column[] = [
  {
    id: "Todo",
    title: "Todo",
    tasks: [
      {
        id: "1",
        title: "Landing Page",
        description: "Create Hero section.",
        priority: "High",
        dueDate: "Jul 30",
        tags: ["Design"],
        members: ["https://github.com/wwilliamsantana.png"],
      },

      {
        id: "2",
        title: "Dark Mode",
        description: "Implement next-themes.",
        priority: "Medium",
        dueDate: "Aug 02",
        tags: ["Frontend"],
        members: ["https://github.com/vercel.png"],
      },
    ],
  },

  {
    id: "In Progress",
    title: "In Progress",
    tasks: [
      {
        id: "3",
        title: "API Integration",
        description: "Connect REST API.",
        priority: "High",
        dueDate: "Aug 05",
        tags: ["Backend"],
        members: ["https://github.com/vercel.png"],
      },
    ],
  },

  {
    id: "Review",
    title: "Review",
    tasks: [
      {
        id: "4",
        title: "Refactor Components",
        description: "Improve architecture.",
        priority: "Low",
        dueDate: "Aug 10",
        tags: ["React"],
        members: ["https://github.com/wwilliamsantana.png"],
      },
    ],
  },

  {
    id: "Done",
    title: "Done",
    tasks: [
      {
        id: "5",
        title: "Setup Project",
        description: "Initial structure.",
        priority: "Low",
        dueDate: "Jul 20",
        tags: ["Setup"],
        members: ["https://github.com/vercel.png"],
      },
    ],
  },
];
