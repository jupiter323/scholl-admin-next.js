export const data = (percentage, status) => ({
  datasets: [{
    data: [percentage, 100 - percentage],
    backgroundColor: [
      graphColorMap[status],
      '#eaeaea',
    ],
  }],
});

export const subjectMap = {
  'Math': 'Math (calculator)',
  'Writing': 'Writing',
  'Reading': 'Reading',
};

export const testSectionCardColorMap = {
  'Developing': 'badge badge-rounded-md purple white-text',
  'Assigned': 'badge badge-rounded-md purple white-text',
  'Exemplary': 'badge badge-rounded-md blue accent-4 white-text',
}

export const graphColorMap = {
  'Developing': '#c10078',
  'Assigned': '#c10078',
  'Exemplary': '#0064f4',
}