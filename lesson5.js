function getSolutions(a, b, c) {
    let D = b ** 2 - 4 * a * c;
    let x1 = 0;
    let x2 = 0;
     if (D < 0) {
        return {
            Des: D,
            roots: 0
        }
    } if (D === 0) {
        x1 = -b / 2 * a;
        return {
            Des: D,
            roots: [x1]
        }
    } if (D > 0) {
        x1 = (-b + Math.sqrt(D)) / (2 * a);
        x2 = (-b + Math.sqrt(D)) / (2 * a);
        return {
            Des: D, 
            roots: [x1, x2]
        }
    }
}

function showSolutionsMessage(a, b, c) {
    let result = getSolutions(a, b, c);
    console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x +${c}`); //как в уравнении менять минус на плюс
    console.log(`Значение дискриминанта ${result.Des}`);
    if (result.Des < 0) {
        console.log('Уравнение не имеет вещественных корней');
    } if (result.Des == 0) {
        console.log(`Уравнение имеет один корень X₁ = ${result.roots}`)
    } if (result.Des > 0) {
        console.log(`Уравнение имеет два корня. X₁ = ${result.roots}, X₂ = ${result.roots}`)
    }
}

showSolutionsMessage(7, 20, -3);

// задание урок 5

let obj = {
    algebra: [2, 4, 5, 2, 3, 4],
    geometry: [2, 4, 5],
    russian: [3, 3, 4, 5],
    physics: [5, 5],
    music: [2, 2, 6],
    english: [4, 4, 3],
    portry: [5, 3, 4],
    chemistry: [2],
    french: [4, 4]
}
console.log(obj)

function getAverageScore(obj) {
    let averageSubjects = {};
    let sumAll = 0;
    let countAll = 0;
    for ( let subject in Object.keys(obj)) {
        let sum = 0;
        for (let i = 0; i < subject(obj).length; i++) {
            console.log(obj[subject].length)
            sum += obj[subject][i];
            sumAll += obj[subject][i];
            countAll += 1;
        }
        averageSubjects[subject] = sum / obj[subject].length;
    }  
    const averageAll = sumAll / countAll;
    return {averageSubjects, averageAll}
}
console.log(getAverageScore(obj))
