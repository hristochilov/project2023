function triangleOfNumb(number) {
    let print = "";

    for (let i = 1; i <= number; i++) {
        let saveNumb = `${i} `;

        print = `${saveNumb.repeat(i)}`;
        console.log(`${print.trimEnd()}`);
    }
}
triangleOfNumb(4);
