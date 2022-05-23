class ClemsJob {
    constructor(title, domain, years){
        this.title = title;
        this.domain = domain;
        this.years = years;
    }
}

var clemsjob1 = new ClemsJob("piano teacher", "music", 18);
var clemsjob2 = new ClemsJob("night receptionist", "hotels", 2);
var clemsjob3 = new ClemsJob("will-be junior dev", "web development", 0);
console.log(clemsjob1); // ClemsJob {title: 'piano teacher', domain: 'music', years: 18}
console.log(clemsjob2); // ClemsJob {title: 'night receptionist', domain: 'hotels', years: 2}
console.log(clemsjob3); // ClemsJob {title: 'will-be junior dev', domain: 'web development', years: 0}