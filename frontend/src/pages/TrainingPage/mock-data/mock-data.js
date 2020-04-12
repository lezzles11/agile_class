const mockData = [
  {
    date: "6/1/20",
    title: "Certified SAFe® Agilist",
    image:
      "https://www.dropbox.com/s/jvxyf4r7k03077e/Leading_SAFe_Logo.png?raw=1",
    description:
      "A foundational course for the Certified SAFe® Agilist certificate",
    amount: 2,
    type: "Certification",
    account: "SAFe®",
    role: "Agilist",
    url: "/agilist",
  },
  {
    date: "6/1/20",
    title: "Certified SAFe® Government Practitioner",
    image: "https://www.dropbox.com/s/yp99hwpr1f6204l/SGP.png?raw=1",
    description:
      "A foundational course for the Certified SAFe® Government Practitioner certificate",
    amount: 2,
    type: "Certification",
    account: "SAFe®",
    role: "Government Practitioner",
    url: "/gov",
  },
  {
    date: "6/1/20",
    title: "Certified SAFe® Product Owner / Product Manager",
    image: "https://www.dropbox.com/s/6p9s06z035pbhae/POPM.png?raw=1",
    description:
      "A foundational course for the Certified SAFe® Product Owner / Product Manager certificate",
    amount: 2,
    type: "Certification",
    account: "SAFe®",
    role: "Product Manager",
    url: "/productmanager",
  },
  {
    date: "6/1/20",
    title: "Certified SAFe® Scrum Master",
    image:
      "https://www.dropbox.com/s/5mitvf1rw1v83lz/Advance%20Scrum.png?raw=1",
    description:
      "A foundational course for the Certified SAFe® Scrum Master certificate",
    amount: 2,
    type: "Certification",
    account: "SAFe®",
    role: "Scrum Master",
    url: "/agilist",
  },
  {
    date: "6/1/20",
    title: "Certified SAFe® Advanced Scrum Master",
    image: "https://www.dropbox.com/s/13ldvrpmpofm8rz/SASM.png?raw=1",
    description:
      "A foundational course for the Certified SAFe® Advanced Scrum Master certificate",
    amount: 2,
    type: "Certification",
    account: "SAFe®",
    role: "Scrum Master",
    url: "/advancedscrummaster",
  },
  {
    date: "6/1/20",
    title: "Certified SAFe® Program Consultant",
    image: "https://www.dropbox.com/s/a1pvtw71jelu5zj/SPC.png?raw=1",
    description:
      "A foundational course for the Certified SAFe® Program Consultant certificate",
    amount: 4,
    type: "Certification",
    account: "SAFe®",
    role: "Program Consultant",
    url: "/programconsultant",
  },

  {
    date: "6/1/20",
    title: "PMI Agile Certified Practitioner",
    image:
      "https://images.youracclaim.com/images/60de4761-84eb-4d9f-a6bc-c290c2e65985/pmi-acp-600px.png",
    description: "A foundational course for the PMI-ACP certificate",
    amount: 2,
    type: "Certification",
    account: "PMI",

    role: "Engineer",
    url: "/pmiacp",
  },
  {
    date: "6/1/20",
    title: "Professional Scrum Product Owner",
    image:
      "https://scrumorg-website-prod.s3.amazonaws.com/drupal/inline-images/2019-02/1PSPO%20Logo.png",
    description:
      "A course to prepare for Professional Scrum Product Owner Certification",
    learn:
      "This two-day course is intended for those with a background in the software industry, whether or not you have previous experience as a product owner. From the product owner’s perspective we examine the key concepts behind iterative software development in an Agile Scrum environment. Our instructors provide real examples from industry that demonstrate the product owner’s roles and responsibilities. From creating user stories to managing product backlogs, to demonstrating value and incremental and iterative delivery, the product owner’s role is clearly explained Our instructors also cover the daily responsibilities of Agile team members and their use of Scrum, Kanban, and Extreme Programming.",
    amount: 2,
    type: "Certification",
    account: "Scrum.org",

    role: "Engineer",
    url: "/pspo",
  },
  {
    date: "6/1/20",
    title: "SAFe® for Architects",
    image: "https://www.dropbox.com/s/opshxvbnq65zsu2/ARCH.png?raw=1",
    description:
      "Architects in an Agile environment need to understand how to engage their entire organization to improve value flow.  Senior System, Solution and Enterprise Architects will learn how to architect in a way that enables DevOps and Release on Demand.  They’ll understand how to incorporate vision, intent and roadmaps in their designs, and will obtain a deeper appreciation for how architects contribute to an Agile/Lean organization.",
    amount: 2,
    type: "Certification",
    account: "SAFe®",
    url: "/Architect",
  },
  {
    date: "6/1/20",
    title: "SAFe® DevOps",
    image: "https://www.dropbox.com/s/v0jdce5ueiac315/SDP.png?raw=1",
    description:
      "This is a two-day course focused on highlighting the DevOps mindset to enable Agile team members to deliver solutions in a rapidly changing world.  Encompassing problem definition, development, testing, deployment and support, DevOps is crucial to success in the current fast-paced environment.  This course will furnish a strong background in DevOps, not only to developers but also to every member of an agile team.",
    amount: 2,
    type: "Certification",
    account: "SAFe®",
    url: "/DevOps",
  },
  {
    date: "6/1/20",
    title: "Inspect & Adapt",
    image: "https://www.dropbox.com/s/ipj4hh60bxrogwt/Image%204.png?raw=1",
    description:
      "At the core of the Agile principles is the concept of regular reflection and tuning.  Inspect & Adapt takes place at the end of each Program Increment.  All of the stakeholders participate in the event, identifying backlog items for improvement and bolstering the culture of continuous learning.The Inspect & Adapt workshop will demonstrate how this Agile principle can be implemented in your environment.  From the workshop, you will gain the skills needed to be introspective about your successes and areas needing more focus. ",
    amount: 2,
    type: "Certification",
    account: "Corporate Training",
    url: "/InspectAndAdapt",
  },
  {
    date: "6/1/20",
    title: "Product Management Workshop",
    image: "https://www.dropbox.com/s/3neom8x754hu9ow/Image%202.png?raw=1",
    description:
      "Product Management has been around as long as there have been products, but it has been redefined in the Agile world.  In an Agile framework, product management is redefined to allow for building and deploying products in a new way.  The ability to work with an iterative development cycle and a fast-moving and self-organized team requires a different approach.",
    amount: 2,
    type: "Workshop",
    account: "Corporate Training",
    url: "/ProductManagementWorkshop",
  },
  {
    date: "6/1/20",
    title: "Program Increment Workshop",
    image: "https://www.dropbox.com/s/pho5ooz3vy8qfh2/Image%205.png?raw=1",
    description:
      "In an Agile development environment, a program increment (PI) is a timebox during which the Agile Release Train incrementally delivers value through deploying new systems and software.  It is the summation of a set of sprints, and usually lasts 8-12 weeks.  The PI is the final artifact of the scrum framework, and represents a usable solution. This workshop guides participants through the process of defining the program increment, guiding its development cycle, and realizing its functionality through deployment.  Practicing Scrum without a program increment is merely wasted effort and a lost opportunity.  This customized workshop shows your team how to successfully define and deliver the PI.",
    amount: 2,
    type: "Workshop",
    account: "Corporate Training",
    url: "/ProgramIncrementWorkshop",
  },
  {
    date: "6/1/20",
    title: "Team Building Workshop",
    image: "https://www.dropbox.com/s/impvkn4vv38zuso/Image%201.png?raw=1",
    description:
      "A workshop designed to help teams connect and increase their effectiveness",
    amount: 2,
    type: "Workshop",
    account: "Corporate Training",
    url: "/TeamBuilding",
  },
  {
    date: "6/1/20",
    title: "Value Stream Corporate Workshop",
    image:
      "https://www.dropbox.com/s/pd7vj63levx83q9/Screen%20Shot%202020-03-15%20at%207.41.35%20PM.png?raw=1",
    description:
      "A foundational workshop to introduce the concept of Value Streams.",
    amount: 2,
    type: "Workshop",
    account: "Corporate Training",
    url: "/ValueStreamWorkshop",
  },
  {
    date: "6/1/20",
    title: "Certified Agile Leadership",
    image: "https://www.dropbox.com/s/o6h66simji8i3fi/CAL1_Logo.jpeg?raw=1",
    description:
      "A foundational course for managers to prepare for the Agile Leadership 1 certificate",
    amount: 2,
    type: "Certification",
    account: "Leadership",
    url: "/Cal1",
  },
  {
    date: "6/1/20",
    title: "Customized Kanban",
    image: "https://www.dropbox.com/s/ol4ow6tafftc0qm/Image%203.png?raw=1",
    description:
      "A workshop designed to help teams be equipped to use Scrum and Kanban principles in their working environments.",
    amount: 2,
    type: "Certification",
    account: "Corporate Training",
    url: "/CustomizedKanban",
  },
  {
    date: "6/1/20",
    title: "CSD – Certified Scrum Developer",
    image: "https://www.dropbox.com/s/vafhd26njihf5jc/CSD_Logo.png?raw=1",
    description:
      "Designed for developers, this course will hone your agile skills.  Through both formal training and an assessment of your technical skills, you’ll obtain a working knowledge of Scrum and Agile principles.  In addition, you’ll learn the engineering skills used by Agile developers.  The course instructs developers in the tools and techniques for delivering code in an iterative process, key to Agile software development",
    amount: 2,
    type: "Certification",
    account: "Scrum Alliance",
    url: "/CSD",
  },
  {
    date: "6/1/20",
    title: "CSM – Certified ScrumMaster®",
    image: "https://www.dropbox.com/s/r6m4otcvvj7tjsq/CSM_Logo.jpeg?raw=1",
    description:
      "A Certified ScrumMaster® is able to assist a scrum team to perform at their optimum level, as well as buffering the team from distractions.  The certification process teaches the Scrum framework and enables CSMs to expand their career opportunities using Agile practices.",
    amount: 2,
    type: "Certification",
    account: "Scrum Alliance",
    url: "/CSM",
  },
  {
    date: "6/1/20",
    title: "CSPO – Certified Scrum Product Owner ",
    image: "https://www.dropbox.com/s/6a39mnbzc0jxev8/CSPO_Logo.png?raw=1",
    description:
      "A Scrum Product Owner generally comes from the business side of the organization.  In the agile world, the product owner not only manages the vision and backlog, they also help focus the team on providing the outcomes that will delight the customers.",
    amount: 2,
    type: "Certification",
    account: "Scrum Alliance",
    url: "/CSPO",
  },
];

export { mockData as default };
