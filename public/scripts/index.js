/* async function t(t) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, t)
    })
} */
/* const colors = ['blue', 'yellow', 'green', 'white', 'red'];
async function a(tick) {
    const value = [0, 111, 222, 333, 444];
    for (index in value) {
        for(i of String(value[index])) {
            tick.value[colors[index]][0] = Number(i);
            await t(100);
        }
    }
} */
function handleTickInit(tick) {
    setTimeout(function () {
        tick.value = {
            blue: [0, 0, 0],
            yellow: [0, 0, 0],
            green: [0, 0, 0],
            white: [0, 0, 0],
            red: [0, 0, 0],

        };
        setTimeout(function () {
            tick.value = {
                blue: [1, 2, 3],
                yellow: [4, 5, 6],
                green: [7, 8, 9],
                white: [1, 2, 3],
                red: [4, 5, 6],
            };

        }, 100);

        // a(tick);
    }, 200);


}
function ff(tick) {


    var counter = Tick.count.down('2022-09-28T00:00:00+09:00');

    counter.onupdate = function (value) {
        tick.value = value;
    };
}
