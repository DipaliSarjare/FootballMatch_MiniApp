let url = "https://jsonmock.hackerrank.com/api/football_matches";

let form = document.getElementById("form");
form.addEventListener("submit",submit);

 function submit(event){
     event.preventDefault();
    //  console.log('hii')
let year = document.getElementById("year").value;

let team1 = document.getElementById("team-1").value;

let team2 = document.getElementById("team-2").value;
champion(year, team1, team2);
 }

 async function champion(year, team1, team2) {
    // https://jsonock.hackerrank.com/api/football_matches?year=2011&team1=Barcelona
let url1 = `https://jsonmock.hackerrank.com/api/football_matches?year=${year}&team1=${team1}&team2=${team2}`;
let res = await fetch(url1);
let data = await res.json();
console.log(data);
renderDom(data.data);
}
let renderDom = (data) => {
    let container = document.getElementById('container')
    container.innerHTML = null;

    data.forEach(({ competition, year, round, team1, team2, team1goals, team2goals }) => {

        const div = document.createElement('div');

        const comp = document.createElement('h4');
        comp.innerText = competition

        const Year = document.createElement('p');
        Year.innerText = year

        const Round = document.createElement('p');
        Round.innerText = round

        const Team1 = document.createElement('p');
        Team1.innerText = team1

        const Team2 = document.createElement('p');
        Team2.innerText = team2

        const TeamGoal1 = document.createElement('p');
        TeamGoal1.innerText = "Team 1 Goal" + team1goals
        const TeamGoal2 = document.createElement('p');
        TeamGoal2.innerText = "Team 2 Goal" + team2goals

        div.append(comp, Year, Round, Team1, Team2, TeamGoal1, TeamGoal2)
        container.append(div)

    });

}

async function fun(){
    let url2= "https://jsonmock.hackerrank.com/api/football_matches?year=2011"
    let res = await fetch(url2);
   let data = await res.json();
    console.log(data);
    renderDom(data.data);
}
fun();

