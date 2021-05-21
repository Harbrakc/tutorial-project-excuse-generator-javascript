/* eslint-disable */
import "bootstrap";
import "./style.css";

//import "./assets/img/rigo-baby.jpg";
//import "./assets/img/4geeks.ico";

window.onload = () => {
  //let randomNumber = Math.floor(Math.random() * 10);
  document.querySelector("#the-excuse").innerHTML = generateExcuse();
  //console.log(randomNumber);
};
let generateExcuse = () => {
  let pronoun = ["el", "un"];
  let subject = [
    "policia",
    "ladron",
    "cocinero",
    "politico",
    "Death Metal",
    "Age of Empires"
  ];
  let action = ["robó mi", "impidió mi", "retrasó mi", "me sacó la"];
  let possetion = ["voluntad", "tarea", "sinceridad", "ganas de vivir"];
  let where = ["en la calle", "en el barrio", "acá cerca", "en la vinoteca"];

  let pronounIndex = Math.floor(Math.random() * pronoun.length);
  let subjectIndex = Math.floor(Math.random() * subject.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let possetionIndex = Math.floor(Math.random() * possetion.length);
  let whereIndex = Math.floor(Math.random() * where.length);

  return (
    pronoun[pronounIndex] +
    " " +
    subject[subjectIndex] +
    " " +
    action[actionIndex] +
    " " +
    possetion[possetionIndex] +
    " " +
    where[whereIndex]
  );
};
