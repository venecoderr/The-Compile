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

export function dashToSpace(inputString) {
    return inputString.split('-').join(' ');
}

export function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function highlighter(tabs, active) {
  tabs.map((i) => {
    if(i.href === active){
      i.current = true
    } else {
      i.current = false
    }
  })

  return tabs
}