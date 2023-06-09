const min = 9;
const max = 14;

function draw() {
    const canvas = document.querySelector("canvas");
    canvas.width = document.documentElement.clientWidth;
    canvas.height = document.documentElement.clientHeight;

    let areaWidth = canvas.width;
    let columnCount = min;
    while (columnCount <= max) {
        if (areaWidth % columnCount === 0) break;
        columnCount++;
        if (columnCount === max) {
            columnCount = min;
            areaWidth--;
        }
    }
    columnCount += 1;
    const gridSize = areaWidth / columnCount;
    const rowCount = Math.floor(canvas.height / gridSize) + 1;
    const offset = gridSize / 2;

    const ctx = canvas.getContext("2d");
    for (let row = 0; row <= rowCount; row++) {
        for (let col = 0; col <= columnCount; col++) {
            const x = (col * gridSize) - offset;
            const y = (row * gridSize) - offset;

            if ((row + col) % 2 === 0) {
                const image = new Image();
                image.onload = () => ctx.drawImage(image, x, y, gridSize, gridSize)
                image.src = "data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20512%20512%22%20style%3D%22height%3A%20512px%3B%20width%3A%20512px%3B%22%3E%3Cpath%20d%3D%22M0%200h512v512H0z%22%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220%22%3E%3C%2Fpath%3E%3Cg%20class%3D%22%22%20transform%3D%22translate(0%2C0)%22%20style%3D%22%22%3E%3Cpath%20d%3D%22m21%2C20.9999v218.8438h59.1907v-159.6532h159.6533v-59.1907h-218.844zm251.1566%2C0v59.1907h159.7999v159.6532h59.0435v-218.8438h-218.8434zm-163.0315%2C88.125v293.7501h293.7503v-293.7501h-293.7503zm146.8748%2C58.7501c48.64%2C0%2088.1253%2C39.4852%2088.1253%2C88.125s-39.4853%2C88.125-88.1253%2C88.125-88.1246-39.4853-88.1246-88.125%2039.4847-88.125%2088.1246-88.125zm-234.9999%2C104.2813v218.8438h218.844v-59.1906h-159.6533v-159.6532h-59.1907zm410.9565%2C0v159.6532h-159.7999v59.1906h218.8434v-218.8438h-59.0435z%22%20fill%3D%22%23000000%22%20fill-opacity%3D%221%22%3E%3C%2Fpath%3E%3C%2Fg%3E%3C%2Fsvg%3E";
            } else {
                ctx.fillStyle = "white";
                ctx.fillRect(x, y, gridSize, gridSize);
            }
        }
    }
}
window.addEventListener("resize", draw);
window.addEventListener("DOMContentLoaded", draw);