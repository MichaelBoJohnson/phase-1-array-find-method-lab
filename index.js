// code your solution here
/*function superbowlWin(record){
    let winningYear = record.find(superbowlWin)
    if (winningYear){
        return record.year
    }

}*/

function superbowlWin(array){
    for (const user of array){
        if(user.result === "W"){
            return user.year;
        }
    }
}