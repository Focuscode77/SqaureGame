// This program goes over the theroy of how to map out a program
//click on box
//if number is 1-4
// change middle box
// else 5-8
//change the body of the page to color
const numberMapper = {

    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8

}

const getColorClass = classes => {

    if (classes.contains("one")) {

        return "one";

    }
    if (classes.contains("two")) {

        return "two";

    }
    if (classes.contains("three")) {

        return "three";

    }
    if (classes.contains("four")) {

        return "four";

    }
    if (classes.contains("five")) {

        return "five";

    }
    if (classes.contains("six")) {

        return "six";

    }
    if (classes.contains("seven")) {

        return "seven";

    }
    if (classes.contains("eight")) {

        return "eight";

    }



}
const replaceClass = (selector, classToAdd) => {
    const ele = document.querySelector(selector);
    ele.removeAttribute("class")
    ele.classList.add("childBox")
    ele.classList.add(`${classToAdd}`)


}

const changeColor = (className) => {
    const selectedNumber = numberMapper[className];
    const box = document.querySelector(`.${className}`);
    const colorClass = getColorClass(box.classList)
    console.log(colorClass);

    if (selectedNumber > 0 && selectedNumber < 5) {
        //if number is 1-4
        // change middle box
        replaceClass("#middleBox", colorClass)


    } else if (selectedNumber > 4) {
        // else 5-8
        //change the body of the page to color
        replaceClass("body", colorClass)
    }



}


