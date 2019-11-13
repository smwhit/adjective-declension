export const Gender = {
    Masculine: { name: "masculine"},
    Feminine: {name: "feminine"},
    Neuter: { name: "neuter"},
    Plural: { name: "plural"}
};

export const Case = {
    Nominative: {name: "nominative"},
    Accusative: {name: "accusative"},
    Dative: {name: "dative"}
}

export const Signal = {
    Yes: "Yes",
    No: "No"
}

export const Selections = {
    gender: Gender.Masculine,
    case: Case.Nominative,
    signal: Signal.Yes,
    ending: ""
}

export const calculate = selections => {
    if(selections.signal === "Yes") {
      if(selections.case === "dative") return "en";
      if(selections.case === "nominative") {
        if(selections.gender === "plural") {
          return "en";
        }
      } else if(selections.case === "accusative") {
        if(selections.gender === "masculine" || selections.gender === "plural") {
          return "en"
        }
      } 
    } else {
      if(selections.case === "nominative") {
        if(selections.gender === "masculine") {
          return "er";
        }
        if(selections.gender === "neuter") {
          return "es";
        }
      }
      if(selections.case === "accusative") {
        if(selections.gender === "masculine") {
          return "en";
        }
        if(selections.gender === "neuter") {
          return "es";
        }
        if(selections.gender === "plural") {
          return "en";
        }
      }
      if(selections.case === "dative") {
        if(selections.gender === "masculine") {
          return "em";
        }
        if(selections.gender ==="feminine") {
          return "er";
        }
        if(selections.gender === "neuter") {
          return "em";
        }
        if(selections.gender === "plural") {
          return "en";
        }
      }
    }
    return "e";
}