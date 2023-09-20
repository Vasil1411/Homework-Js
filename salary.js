function salary (input) {
 let tabsCount = Number(input[0])
 let salary = Number(input[1])

 for (let i = 0 ; i< tabsCount ; i++) {
    switch (input[i + 2]) {
        case 'Facebook' :
            salary -=150
        break ;
        case 'Instagram' :
            salary -= 100
        break ;
        case 'Reddit' :
            salary -= 50
        break ;

    }

 }
 if (salary <= 0) {
    console.log(`You have lost your salary.`);
 }
 else {
    console.log(salary);
 }

}
salary (["3", "500", "Facebook", "Stackoverflow.com", "softuni.bg"])