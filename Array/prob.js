/********When to use map,filter, reduce*********/

const fighter = [
  { name: 'John', combatSkill: 80 },
  { name: 'Mary', combatSkill: 70 },
  {name:'Smith', combatSkill: 90}
];

//Problem
//1) Pick their names
//2) pick the fighters whose combatSkill  >=80
//3) sum of all combatSkills

console.log(fighter.map((f) => f.name));
console.log(fighter.filter((f) => f.combatSkill >=80));
console.log(fighter.reduce((sum, f) => sum + f.combatSkill, 0));
// node Array/prob.js