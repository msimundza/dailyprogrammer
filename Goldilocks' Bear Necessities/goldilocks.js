$('button').on('click', function() {
    var t = $('#txt').val();
    var tArr = t.split("\n");
    var solution = [];
    var g = tArr[0].split(" ");
    gWeight = parseInt(g[0]);
    gHot = parseInt(g[1]);
    for (var i = 1; i < tArr.length; i++) {
        var temp = tArr[i].split(" ");
        if (gWeight < parseInt(temp[0]) && gHot > parseInt(temp[1])) {
            solution.push(i);
        }
    }
    alert(solution);
})
