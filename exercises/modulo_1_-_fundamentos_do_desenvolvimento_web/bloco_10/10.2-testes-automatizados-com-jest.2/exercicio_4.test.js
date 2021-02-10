const fetch = require('node-fetch');

const getRepos = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then((data) => {
      return data.map((repo) => repo.name);
    });
};

const url = 'https://api.github.com/orgs/tryber/repos'

const repo1 = 'sd-01-week4-5-project-todo-list';
const repo2 ='sd-01-week4-5-project-meme-generator';

describe('test if there is a given repository', () => {
  it('should include the given repositories',() =>{
    expect.assertions(2);
    return getRepos(url).then(repoList => {
      expect(repoList).toContain(repo1);
      expect(repoList).toContain(repo2);
    });
  });

  it('should not contain the given repository',() => {
    expect.assertions(1);
    return getRepos(url).then(repoList => {
      expect(repoList).not.toContain('sd-09-special-project');
    });
  });


});