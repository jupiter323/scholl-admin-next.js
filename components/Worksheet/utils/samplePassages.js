export default [
  {
    id: 1,
    subject: 'reading',
    title: 'Passage Title 1',
    problems: [
      {
        id: 1,
        subject: 'math',
        difficulty: 'easy',
        type: 'skillBuilder',
        inWorkbook: false,
        topics: [
          'rightTriangles',
          'trigonometry',
        ],
      },
      {
        id: 3,
        subject: 'reading',
        difficulty: 'hard',
        type: 'satPractice',
        inWorkbook: false,
        disabled: true,
        topics: [
          'rightTriangles',
          'trigonometry',
        ],
      },
    ],
  },
  {
    id: 2,
    subject: 'writing',
    title: 'Passage Title 2',
    problems: [
      {
        id: 2,
        subject: 'reading',
        difficulty: 'easy',
        type: 'satPractice',
        inWorkbook: false,
        topics: [
          'rightTriangles',
          'trigonometry',
        ],
      },
      {
        id: 4,
        subject: 'writing',
        difficulty: 'medium',
        type: 'skillBuilder',
        inWorkbook: false,
        topics: [
          'trigonometry',
        ],
      },
    ],
  },
  {
    id: 3,
    subject: 'math',
    title: 'Passage Title 3',
    problems: [
      {
        id: 5,
        subject: 'writing',
        difficulty: 'hard',
        type: 'skillBuilder',
        inWorkbook: false,
        disabled: true,
        topics: [
          'rightTriangles',
        ],
      },
      {
        id: 6,
        subject: 'math',
        difficulty: 'medium',
        type: 'satPractice',
        inWorkbook: false,
        topics: [
          'rightTriangles',
          'trigonometry',
        ],
      },
    ],
  },
];