export const vrcStats = [
  { value: "20,000+", label: "Teams Worldwide" },
  { value: "50+", label: "Countries Competing" },
  { value: "Aug-Apr", label: "Season Duration" },
  { value: "100%", label: "Student-Driven" },
];

export const tracks = [
  {
    icon: "🔧",
    name: "Mechanical Engineering",
    description:
      "Design and build the physical robot - from drivetrain to game mechanisms.",
    skills: [
      "CAD design with SolidWorks / Fusion 360",
      "Fabrication and machining",
      "3D printing and prototyping",
      "Metal working and welding",
      "Pneumatics systems",
    ],
  },
  {
    icon: "💻",
    name: "Programming",
    // TODO (pre-launch): Replace this description and skills list with VRC-appropriate content.
    // The previous content incorrectly listed FRC (FIRST Robotics Competition) tools.
    // VEX teams use VEXcode Pro / PROS, C++ or Python for VEX V5, VEX sensors and controllers.
    // See STATIC-CONTENT-REVIEW.md → "Programming & Electrical Track Skills (VRC vs. FRC Mismatch)".
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    skills: [
      "Lorem ipsum — VRC programming language (C++/Python/Blocks)",
      "Dolor sit amet — robot autonomy and control",
      "Consectetur adipiscing — VEX V5 sensor integration",
      "Sed do eiusmod — driver control and operator interface",
      "Tempor incididunt — version control and documentation",
    ],
  },
  {
    icon: "⚡",
    name: "Electrical",
    // TODO (pre-launch): Update skills list to VRC-appropriate electrical content.
    // "Motor controllers (REV, CTRE)" and "CAN bus and networking" reference FRC vendors and
    // FRC-specific wiring; VEX V5 uses integrated Smart Motors and the VEX V5 brain.
    // See STATIC-CONTENT-REVIEW.md → "Programming & Electrical Track Skills (VRC vs. FRC Mismatch)".
    description:
      "Design and wire the robot's entire electrical system safely and reliably.",
    skills: [
      "Wiring and cable management",
      "Lorem ipsum — VEX V5 motor and sensor wiring",
      "Dolor sit amet — VEX V5 brain and power distribution",
      "Pneumatics controls",
      "Electronics troubleshooting",
    ],
  },
  {
    icon: "📊",
    name: "Business & Media",
    description:
      "Run the team like a business - marketing, fundraising, outreach, and documentation.",
    skills: [
      "Marketing and branding",
      "Grant writing and fundraising",
      "Social media management",
      "Video production and editing",
      "Presentation and public speaking",
    ],
  },
];

// TODO (pre-launch): Replace these Lorem Ipsum placeholders with real student quotes.
// Use first name and graduation year only for privacy (e.g. "Alex J., Class of '25").
// See STATIC-CONTENT-REVIEW.md → "Student Testimonials".
export const testimonials = [
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.",
    author: "Lorem Ipsum",
    role: "Placeholder Alumni Quote",
    initials: "LI",
  },
  {
    text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    author: "Dolor Sit",
    role: "Placeholder Alumni Quote",
    initials: "DS",
  },
  {
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    author: "Amet Consectetur",
    role: "Placeholder Student Quote",
    initials: "AC",
  },
];

export const joinSteps = [
  {
    title: "Talk to a Current Member or Mentor",
    desc: "Reach out to anyone on the team! We're always happy to answer questions and share our experiences. You can also email us or reach out on social media.",
  },
  {
    title: "Attend a Team Meeting",
    desc: "Our meetings are open to prospective members. Come see what a typical day looks like, meet everyone, and get a feel for the team culture. No pressure, no commitment.",
  },
  {
    title: "Complete Your Registration",
    desc: "Fill out the student registration form and parental consent forms online. We'll also need your emergency contact information before you can participate in hands-on activities.",
  },
  {
    title: "Show Up and Start Learning!",
    desc: "Once you're registered, you're part of the team! Come to meetings, ask questions, try new things, and don't be afraid to make mistakes - that's how we all learn.",
  },
];

export const dayInLife = [
  {
    icon: "🏗️",
    title: "Build Season Meeting",
    items: [
      "6:00 PM - Team gathers, quick stand-up meeting",
      "6:15 PM - Sub-teams split off to work on robot",
      "7:30 PM - Progress check-in with lead mentors",
      "8:00 PM - Continue build, testing prototypes",
      "8:45 PM - Cleanup and next meeting planning",
      "9:00 PM - End of meeting",
    ],
  },
  {
    icon: "📖",
    title: "Off-Season Workshop",
    items: [
      "New member orientation and safety training",
      "CAD and programming workshops",
      "Team-building and leadership activities",
      "Outreach events at local schools",
      "Off-season competitions for practice",
      "Planning and fundraising for next season",
    ],
  },
  {
    icon: "🏆",
    title: "Competition Day",
    items: [
      "Pit setup and robot inspection at 7:00 AM",
      "Practice matches to tune robot settings",
      "Qualification matches throughout the day",
      "Alliance selection (playoff bracket)",
      "Elimination matches and awards ceremony",
      "Team dinner and celebration!",
    ],
  },
];
