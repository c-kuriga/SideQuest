const verbs = ['touch', 'watch', 'think of', 'eat', 'learn about', 'bake', 'spend time doing'];
const adjs = ['reminds you of home', 'makes you think of your childhood', 'has deep meaning to you', 'you never usually have time for', 'that’s out of your comfort zone', 'you never have before'];

const generateQuest = () => {
  const quest = document.getElementById('quest'); // Fixed spelling
  const randomVerbIndex = Math.floor(Math.random() * verbs.length);
  const randomAdjsIndex = Math.floor(Math.random() * adjs.length);

  quest.innerHTML = `Go ${verbs[randomVerbIndex]} something that ${adjs[randomAdjsIndex]}.`;

  // Return the quest (optional, depending on what you want to do)
  return quest.innerHTML;
};
