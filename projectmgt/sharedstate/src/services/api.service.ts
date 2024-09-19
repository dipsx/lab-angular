export const apiService = () => {
  const getProjects = () => {
    return Promise.resolve([
      {
        id: 1,
        name: 'Project Alpha',
        description: 'Description of Project Alpha',
        date: '2023-01-01',
      },
      {
        id: 2,
        name: 'Project Beta',
        description: 'Description of Project Beta',
        date: '2023-02-01',
      },
      {
        id: 3,
        name: 'Project Gamma',
        description: 'Description of Project Gamma',
        date: '2023-03-01',
      },
      {
        id: 4,
        name: 'Project Delta',
        description: 'Description of Project Delta',
        date: '2023-04-01',
      },
      {
        id: 5,
        name: 'Project Epsilon',
        description: 'Description of Project Epsilon',
        date: '2023-05-01',
      },
      {
        id: 6,
        name: 'Project Zeta',
        description: 'Description of Project Zeta',
        date: '2023-06-01',
      },
      {
        id: 7,
        name: 'Project Eta',
        description: 'Description of Project Eta',
        date: '2023-07-01',
      },
      {
        id: 8,
        name: 'Project Theta',
        description: 'Description of Project Theta',
        date: '2023-08-01',
      },
      {
        id: 9,
        name: 'Project Iota',
        description: 'Description of Project Iota',
        date: '2023-09-01',
      },
      {
        id: 10,
        name: 'Project Kappa',
        description: 'Description of Project Kappa',
        date: '2023-10-01',
      },
    ]);
  };

  const getTasks = () => {
    return Promise.resolve([
      { id: 1, projectId: 1, name: 'Design Mockups', status: 'Completed' },
      { id: 2, projectId: 2, name: 'API Integration', status: 'In Progress' },
    ]);
  };

  const getTeam = () => {
    return Promise.resolve([
      { id: 1, name: 'John Doe', role: 'Developer' },
      { id: 2, name: 'Jane Smith', role: 'Designer' },
      { id: 3, name: 'Alice Johnson', role: 'Project Manager' },
      { id: 4, name: 'Bob Brown', role: 'Tester' },
    ]);
  };

  return { getProjects, getTasks, getTeam };
};
