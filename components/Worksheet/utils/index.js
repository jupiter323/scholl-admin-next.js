export const samplePassages = [
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

export const sampleProblems = [
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
];

export const subjectOptions = [
  {
    label: 'Reading',
    value: 'Reading',
  },
  {
    label: 'Writing',
    value: 'Writing',
  },
  {
    label: 'Math',
    value: 'Math',
  },
];
export const typeOptions = [
  {
    label: 'SAT Practice',
    value: 'SAT Practice',
  },
  {
    label: 'Skill Builder',
    value: 'Skill Builders',
  },
];
export const difficultyOptions = [
  {
    label: 'Basic',
    value: 'Basic',
  },
  {
    label: 'Medium',
    value: 'Medium',
  },
  {
    label: 'Advanced',
    value: 'Advanced',
  },
  {
    label: 'Mixed',
    value: 'Mixed',
  },
];
export const tagOptions = [
  {
    label: '',
    value: '',
  },
];

export const categoryOptions = [
  {
    label: 'Math',
    options: [
      { value: 'Special Right Triangles', label: 'Special Right Triangles' },
      { value: 'Volumes', label: 'Volumes' },
      { value: 'Trig Functions', label: 'Trig Functions' },
    ],
  },
  {
    label: 'Writing',
    options: [
      { value: 'Astrology', label: 'Astrology' },
      { value: 'Algebra', label: 'Algebra' },
    ],
  },
  {
    label: 'Reading',
    options: [
      { value: 'Geometry', label: 'Geometry' },
      { value: 'Pythagorean Theorem', label: 'Pythagorean Theorem' },
    ],
  },
];


export const getDefaultCategories = (categories, subject) => {
  const subjectCategories = categoryOptions.filter(categorySection => categorySection.label === subject);
  const subjectCategoryOptions = subjectCategories && subjectCategories.length > 0 && subjectCategories[0].options;
  return categories.map(currentCategory => subjectCategoryOptions.filter(category => category.value === currentCategory)[0]);
}
