// oggetto
const me = {
  firstName: "Luca",
  lastName: "Romano",
  age: 27,
  skills: ["HTML", "CSS", "JavaScript"],
  wantsFrontendJob: true,
};

// aggiungo una nuova skill
me.skills.push("React");

// aggiorno l'età
me.age = 28;

// messaggio
const intro = `Ciao, mi chiamo ${me.firstName} ${me.lastName}. Ho ${me.age} anni e conosco ${me.skills.join(", ")}.`;

console.log("Nuove skill:", me.skills);
console.log(intro);


// funzioni con arrow function

const isAdult = ({age}) => age >= 18;

console.log(isAdult({age:20 }));
console.log(isAdult({age:11}));

// funzione per aggiungere skills
const addSkills = ({person, newSkills}) => person.skills.push(newSkills);

addSkills(me, 'Tailwind'); 

console.log(me.skills);
