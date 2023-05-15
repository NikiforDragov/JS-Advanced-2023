function calculate(area, vol, inputJson) {

    const input = JSON.parse(inputJson);

    function calc(obj) {
        const areaObj = Math.abs(area.call(obj));
        const volObj = Math.abs(vol.call(obj));

        return { area: areaObj, volume: volObj }
    }

    return input.map(calc);
}
calculate(area, vol, `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]`
)
function area() {
    return Math.abs(this.x * this.y);
};

function vol() {
    return Math.abs(this.x * this.y * this.z);
};

