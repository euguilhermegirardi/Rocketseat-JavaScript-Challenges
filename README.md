<h1 align="center">
    <img alt="Starter" title="Javascript Starter"src=".github/logo.svg" width="200px" />
</h1>

<h3 align="center">
  Rocketseat JavaScript Challenges :book:
</h3>

<p align="center">This project is just the final exercises of each Rocketseat Javascript course module <a href="https://skylab.rocketseat.com.br/journey/starter">JavaScript Starter</a> 🎓
</p>

### Module 1 - JavaScript Introduction :point_up:

<h3>Exercise One</h3>
Create a function that gives the following object:

```
var address = {
		street: "Rua dos Pinheiros",
    number: 1293,
    city: "Sao Paulo",
    state: "SP",
};
```

Return the following content:
`The developer lives in Sao Paulo/SP, street 'Rua dos Pinheiros' number 1293.`

<h3>Exercise Two</h3>
Create a function that, given an interval (between x and y), displays all even numbers:

```
function evenNumbers(x, y) {
// code...
}
evenNumbers(0, 20);
```

<h3>Exercise Three</h3>

Write a function that checks if the skill vector passed has the "Javascript" skill
and returns a boolean true / false if it exists or not.

```
function hasAbility(skills) {
// code...
}
var skills = ["Javascript", "ReactJS", "React Native"];
hasAbility(skills); // true ou false
```

<h3>Exercise Four</h3>
Write a function that, given a total of years of study, returns how experienced the user is:

```
function exp(years) {
// code...
}
var studiedYears = 7;
exp(studiedYears);
// De 0-1 year: Beginner
// De 1-3 years: Intermediary
// De 3-6 years: Advanced
// De 7 above: Jedi Master
```

<h3>Exercise Five</h3>

Given the following vector of objects:

```
var users = [
{
name: "Diego",
abilities: ["Javascript", "ReactJS", "Redux"]
},
{
name: "Gabriel",
abilities: ["VueJS", "Ruby on Rails", "Elixir"]
}
];
```

Write a function that produces the following result:

`Diego knows: Javascript, ReactJS, Redux.`
`Gabriel knows: VueJS, Ruby on Rails, Elixir.`
