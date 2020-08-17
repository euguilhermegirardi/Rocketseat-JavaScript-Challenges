// First exercise
const checkAge = age => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      age >= 18 ? resolve() : reject();
    }, 2000);
  });
};

checkAge(19)
  .then(function() {
    console.log("Older than 18");
  })
  .catch(function() {
    console.log("Minor than 18");
  });


// Second exercise
var inputName = document.getElementById("user");
var dataList = document.querySelector("ul");

const getUserRepo = () => {
  var user = inputName.value;

  if (!user) {
    renderError();
    alert("Fill up the input field.");
  }

  renderLoading();

  axios
    .get(`https://api.github.com/users/${user}/repos`)
    .then(response => {
      fillList(response.data);
    })
    .catch(error => {
      alert("It wasn't possible realize the search!");
      renderError(error);
    });
};

function renderLoading(loading) {
  dataList.innerHTML = "";
  var textElement = document.createTextNode("Loading...");
  var loadingElement = document.createElement("li");
  loadingElement.appendChild(textElement);
  dataList.appendChild(loadingElement);
}

const fillList = repositories => {
  console.log("TCL: repositories", repositories);

  dataList.innerHTML = "";

  for (repo of repositories) {
    const reponame = document.createTextNode(repo.name);
    const repoItem = document.createElement("li");

    repoItem.appendChild(reponame);
    dataList.appendChild(repoItem);
  }
};

function renderError() {
  dataList.innerHTML = "";
  var user = inputName.value;
  var msgUserEmpty = !user ? "Fill up the input field" : "Error!";

  var textElement = document.createTextNode(msgUserEmpty);
  var errorElement = document.createElement("li");
  errorElement.style.color = "#F00";
  errorElement.appendChild(textElement);
  dataList.appendChild(errorElement);
}


