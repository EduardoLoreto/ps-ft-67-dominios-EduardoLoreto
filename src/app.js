/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ["The", "Our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let domains = [""];

  for (let i = 0; 1 < pronoun.length; i++) {
    for (let j = 0; 1 < adj.length; j++){
      for (let k = 0; 1 < noun.length; k++){
        console.log(pronoun[i] + adj[j] + noun[k]);
        const domain = pronoun[i] + adj[j] + noun[k] + ".com";
        domains.push(domain);              
      }
    }
  }
};
