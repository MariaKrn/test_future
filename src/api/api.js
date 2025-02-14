export const getUserRepositories = async (username, page) => {
  const url = `https://api.github.com/users/${username}/repos?page=1&per_page=${page}`;
  return await fetch(url, {
    method: "GET",
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      return "Error";
    })
    .then((data) => {
      return data;
    });
};
