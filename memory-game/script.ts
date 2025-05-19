let flipedCount = 0;
//it is displayed on the web page
let flipeCount = 0;
//it is used to calculate the score
let flippeditems: (string | null)[] = []
//it is used to reset the divs
let flippedElements: HTMLDivElement[] = [];

function flipElement(element: HTMLDivElement){

    if(flipedCount >= 2) {
        return;
    } 
    console.log(element);

    element.classList.toggle('rotated');

    let frontCard = element.querySelector('.card-front') as HTMLDivElement;
    console.log(frontCard);
    
    let backCard = element.querySelector(".card-back") as HTMLDivElement;
    console.log(backCard);
    

    setTimeout(() => {
    frontCard.style.display = "none";
    backCard.style.display = "block";
    },150);

    flipedCount++;
    flippeditems.push(element.getAttribute('item'));
    flippedElements.push(element);

    console.log(flippeditems);
    console.log(flippedElements);

    element.style.pointerEvents = "none";

    let score = 0;
    if(flippeditems.length == 2) {
        if(flippeditems[0] === flippeditems[1]) {
            score += 1;
        } else {
            score += 2;
        }
        console.log(score);

        flipeCount += score;

        setTimeout(() => {
            flipedCount = 0;
            flippeditems = [];
            if(score == 1) {
                flippedElements.forEach((element) => {
                    // element.style.visibility = 'hidden';
                    element.style.pointerEvents = "none";
                });
            } else {
                flippedElements.forEach(element => {
                    let elementfc = element.querySelector('.card-front') as HTMLDivElement;
                    let elementbc = element.querySelector('.card-back') as HTMLDivElement;
                    console.log(elementfc);
                    console.log(elementbc);

                    elementbc.style.display = "none";
                    elementfc.style.display = "block";                    

                    // if(elementfc){
                    //     elementfc.style.display = "block";
                    // }
                    // if(elementbc) {
                    //     elementbc.style.display = "none";
                    // }

                    element.classList.remove('rotated');
                    element.style.pointerEvents = "auto";
                });
            }
            flippedElements = [];
            //displaying the count flipes
            let displayflipes = document.getElementById('flipcount') as HTMLParagraphElement;
            displayflipes.textContent = flipeCount.toString();
        }, 500);
        if(flipeCount >= 30) {
            const message = document.getElementById('message') as HTMLHeadElement;
            // setTimeout(() => {
                message.textContent = "You lost! Pleace try again!";
            // },1000);
            const cardlist: NodeListOf<HTMLDivElement> = document.querySelectorAll('.card');
            cardlist.forEach((element) => {
                element.style.pointerEvents = 'none';
            });
            setTimeout(() => {
                window.location.reload();
            },5000);
        }
    }
}

