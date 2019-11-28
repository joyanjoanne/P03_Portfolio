function changeArrow() {
    const rows = document.querySelectorAll(".row");
    const arrowContainer = document.querySelector('#arrow-container');
    if (rows[rows.length - 1].getBoundingClientRect().bottom < innerHeight) {
        // arrowContainer.setAttribute("onclick", "scrollIntoView('top')");
        arrowContainer.setAttribute("style", "transform: rotate(180deg) translateY(8em)");
    }
    else {
        // arrowContainer.setAttribute("onclick", "scrollIntoView('content')");
        arrowContainer.removeAttribute("style");
    }
    // console.log(`bottom: ${rows[rows.length - 1].getBoundingClientRect().bottom}, innerHeight * 2/3: ${innerHeight *2/3}`);
}

function scrollIntoView(id) {
    document.getElementById(id).scrollIntoView();
}

document.querySelectorAll(".scroll-snap_container")[0].onscroll = changeArrow;