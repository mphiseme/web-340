const cllTeam = require('./team'); //import class team
//import npm momement package
const moment = require('./sports-app/node_modules/moment'); 

/**
 * create function name findTeams() to get list of teams and return it
 * us module.exports to export function. * 
 */
module.exports  = function findTeams(){      
    let teams = [
        new cllTeam('Alabama', 'Crimson Tide', 54),
        new cllTeam('LSU', 'Tigers', 54),
        new cllTeam('Georgia', 'Bulldog', 54),
        new cllTeam('Texas', 'longhorns', 54),
        new cllTeam('USC', 'Trojans', 54),
    ]
    return teams;    
}

/**
 * This function name findTeam() loop through team  looking for 
 * whatever name is being search  for *  
 */
function findTeam(name){
    teams.find(function(post, index){
        if(post.name == name)
        return true;
    })
}

/**
 * This function name getGame() get the name of the teams
 * And display them.
 */
module.exports = function getGame (){
    let alabTem1 = findTeam('Alabama');
    let tigersTem2 = findTeam('LSU');
    return `${alabTem1.name} ${alabTem1.Mascot} is playing ${tigersTem2.name} ${tigersTem2.Mascot} on ${moment().add(7, 'days').calendar()} at 7:30 PM CST.`;
}

