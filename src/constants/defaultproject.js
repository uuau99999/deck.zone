
export const STRING_SIZES = {
  scriptName: 20,
  projectName: 30
};

export const DefaultProject = {
  activeScript: '0',
  resources: [
    { name: 'rolling-dice.png', url: 'http://seiyria.com/gameicons-font/png/rolling-dice.png' }
  ],
  scripts: [
    { name: 'main.deck', contents: 'text = 1, "Hello World", 1, 1, 0, 0' }
  ]
};