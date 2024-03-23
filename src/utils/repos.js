export const fetchRepos = async () => {
    try {
      const response = await fetch('https://api.github.com/users/venecoderr/repos?sort=created&per_page=7');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const repoData = await response.json();
      return repoData
    } catch (error) {
        console.log(error)
    }
};
