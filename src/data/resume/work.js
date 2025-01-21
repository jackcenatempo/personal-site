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
    name: 'Microsoft Research',
    position: 'Pre-Doctoral Research Assistant',
    url: 'https://www.microsoft.com/en-us/research/theme/economics-and-computation/',
    startDate: 'June 2022',
    endDate: 'July 2024',
    summary: `The Economics and Computation group at Microsoft Research New England studies a variety of topics at the intersection of economics and computer science.
    I've had the privilege of working on a wide variety of topics with unique datasets. A sample of the research topics I've worked on:`,
    highlights: [
      'Generative AI and its effects on collaboration and productivity within organizations',
      'Search engine markets, network effects, and the role of defaults',
      'Models of mid-range climate change, utility markets, and demographic change',
      'Bias in human-annotated labeling systems',
      'Demographic trends in hybrid work environments',
      'Congestion pricing via HOT lanes',
    ],
  },
];

export default work;
