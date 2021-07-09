function hide1() {
    let collapse1 = document.getElementById('collapse1');
    let collapse2 = document.getElementById('collapse2');
    let collapse3 = document.getElementById('collapse3');
    if (collapse1.style.display != 'none') {
        collapse1.style.display = 'none';
    }
    else {
        collapse1.style.display = 'block';
        if (collapse3.style.display != 'none') {
            collapse3.style.display = 'none';
        }
        if (collapse2.style.display != 'none') {
            collapse2.style.display = 'none';
        }
    }
}
function hide2() {
    let collapse2 = document.getElementById('collapse2');
    let collapse3 = document.getElementById('collapse3');
    let collapse1 = document.getElementById('collapse1');
    if (collapse2.style.display != 'none') {
        collapse2.style.display = 'none';
    }
    else {
        collapse2.style.display = 'block';
        if (collapse1.style.display != 'none') {
            collapse1.style.display = 'none';
        }
        if (collapse3.style.display != 'none') {
            collapse3.style.display = 'none';
        }
    }
}
function hide3() {
    let collapse3 = document.getElementById('collapse3');
    let collapse2 = document.getElementById('collapse2');
    let collapse1 = document.getElementById('collapse1');
    if (collapse3.style.display != 'none') {
        collapse3.style.display = 'none';
    }
    else {
        collapse3.style.display = 'block';
        if (collapse1.style.display != 'none') {
            collapse1.style.display = 'none';
        }
        if (collapse2.style.display != 'none') {
            collapse2.style.display = 'none';
        }
    }
}

// onload("hide1(),hide2(),hide3()");
// alert("Please give your valuable feedback!");