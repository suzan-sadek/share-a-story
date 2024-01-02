const btnBack = document.getElementsByClassName("back");
// console.log(btnBack);

btnBack[0].addEventListener('click',() => {
    window.history.back();
    // console.log("back");
});