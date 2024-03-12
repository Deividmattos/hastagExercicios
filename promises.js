function getUser(callback) {
  console.log("Recuperado informacoes do usuario");
  setTimeout(() => {
    callback({ id: 0, name: "Daniel", surname: "Porto" });
  }, 2000);
}

function getFriendList(user, callback) {
  console.log(
    `Recuperando lista de amigo do Usuario ${user.name} ${user.surname}`
  );
  setTimout(() => {
    callback(["joao", "Bruna", "Felipe", "Lira"]);
  }, 2000);
}

function getPhotos(username, callback) {
  console.log("Recuperando fotos do usuarios ${username}");
  setTimeout(() => {
    callback(["egito", "bahamas", "maldivas", "suecia"]);
  }, 2000);
}
getUser((user) =>
  getFriendList(user, (friends) => {
    getPhotos(friends[3], console.log);
  })
);
