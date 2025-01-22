/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Microsoft Research New England',
    position: 'Predoctoral Research Fellow',
    url: 'https://www.microsoft.com/en-us/research/theme/economics-and-computation/',
    startDate: 'June 2022',
    endDate: 'July 2024',
    summary: `I worked with a team of economists and computer scientists to study policy-relevant issues by leveraging a range of computational tools to analyze unique data.
    Here's a sample of the research questions I've helped answer:`,
    highlights: [
      'How do generative AI tools affect collaboration and productivity within organizations?',
      'How do search engines learn, and how would a monopoly in the market for search impact this process?',
      'Can we model utility markets, climate change, and demographic shifts to inform the optimal placement of resource-intensive data centers?',
      'Do human-annotated recommendation systems propagate latent cultural bias from their training data? Is this avoidable?',
      "How does the transition to hybrid work affect participants' work performance, job satisfaction, and professional network?",
      'Does dynamic pricing to bypass highway congestion improve travel times and reduce emissions?',
    ],
  },
];

export default work;
