export const getUserRepositories = async (username) => {
  const url = `https://api.github.com/users/${username}/repos`;
  return await fetch(url, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};
