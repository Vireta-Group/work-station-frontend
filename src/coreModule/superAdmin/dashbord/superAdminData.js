export const superAdminData = [
  {
    cards: [
      { id: 1, title: "Total Clients", value: 120 },
      { id: 2, title: "Ongoing Employees", value: 5 },
      { id: 3, title: "Total Projects", value: 22 },
    ],

    attendance: {
      today: [
        { name: "Present", value: 4 },
        { name: "Absent", value: 1 },
        { name: "Late", value: 0 },
      ],
      last7days: [
        { name: "Present", value: 30 },
        { name: "Absent", value: 3 },
        { name: "Late", value: 2 },
      ],
      last1month: [
        { name: "Present", value: 120 },
        { name: "Absent", value: 8 },
        { name: "Late", value: 5 },
      ],
    },

    employees: [
      { id: 1, name: "Lindsey Curtis", role: "Frontend Developer", img: "https://randomuser.me/api/portraits/women/44.jpg" },
      { id: 2, name: "David Warner", role: "Backend Developer", img: "https://randomuser.me/api/portraits/men/32.jpg" },
      { id: 3, name: "Emily Rose", role: "UI/UX Designer", img: "https://randomuser.me/api/portraits/women/65.jpg" },
      { id: 4, name: "Michael Lee", role: "Project Manager", img: "https://randomuser.me/api/portraits/men/45.jpg" },
      { id: 5, name: "Sophia Islam", role: "QA Engineer", img: "https://randomuser.me/api/portraits/women/68.jpg" },
    ],

    activeProjects: [
      {
        id: 1,
        name: "E-commerce Website",
        deadline: "2025-09-20",
        projectLead: "Michael Lee",
        status: "In Progress",
        assign: [
          { name: "Lindsey Curtis", img: "https://randomuser.me/api/portraits/women/44.jpg" },
          { name: "Emily Rose", img: "https://randomuser.me/api/portraits/women/65.jpg" },
        ],
      },
      {
        id: 2,
        name: "HR Management System",
        deadline: "2025-10-05",
        projectLead: "Sophia Islam",
        status: "Completed",
        assign: [
          { name: "David Warner", img: "https://randomuser.me/api/portraits/men/32.jpg" },
          { name: "Michael Lee", img: "https://randomuser.me/api/portraits/men/45.jpg" },
        ],
      },
      {
        id: 3,
        name: "Travel Booking App",
        deadline: "2025-09-15",
        projectLead: "Emily Rose",
        status: "Rejected",
        assign: [
          { name: "Lindsey Curtis", img: "https://randomuser.me/api/portraits/women/44.jpg" },
          { name: "Sophia Islam", img: "https://randomuser.me/api/portraits/women/68.jpg" },
        ],
      },
      {
        id: 4,
        name: "Inventory Management",
        deadline: "2025-09-25",
        projectLead: "David Warner",
        status: "In Progress",
        assign: [
          { name: "Emily Rose", img: "https://randomuser.me/api/portraits/women/65.jpg" },
          { name: "Michael Lee", img: "https://randomuser.me/api/portraits/men/45.jpg" },
        ],
      },
      {
        id: 5,
        name: "Learning Management System",
        deadline: "2025-10-12",
        projectLead: "Lindsey Curtis",
        status: "In Progress",
        assign: [
          { name: "David Warner", img: "https://randomuser.me/api/portraits/men/32.jpg" },
          { name: "Sophia Islam", img: "https://randomuser.me/api/portraits/women/68.jpg" },
        ],
      },
    ],

    todoTasks: [
      {
        id: 1,
        name: "UI Design Update",
        deadline: "2025-09-08",
        status: "In Progress",
        assign: [
          { name: "Emily Rose", img: "https://randomuser.me/api/portraits/women/65.jpg" },
          { name: "Lindsey Curtis", img: "https://randomuser.me/api/portraits/women/44.jpg" },
        ],
      },
      {
        id: 2,
        name: "API Integration",
        deadline: "2025-09-12",
        status: "Completed",
        assign: [
          { name: "David Warner", img: "https://randomuser.me/api/portraits/men/32.jpg" },
        ],
      },
      {
        id: 3,
        name: "Database Optimization",
        deadline: "2025-09-18",
        status: "Rejected",
        assign: [
          { name: "Michael Lee", img: "https://randomuser.me/api/portraits/men/45.jpg" },
          { name: "Sophia Islam", img: "https://randomuser.me/api/portraits/women/68.jpg" },
        ],
      },
      {
        id: 4,
        name: "Testing & QA",
        deadline: "2025-09-22",
        status: "In Progress",
        assign: [
          { name: "Sophia Islam", img: "https://randomuser.me/api/portraits/women/68.jpg" },
          { name: "Emily Rose", img: "https://randomuser.me/api/portraits/women/65.jpg" },
        ],
      },
    ],
  },
];

export default superAdminData