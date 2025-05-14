

function fun() {
    const heading1 = document.getElementById("heading1") as HTMLHeadingElement;
    heading1.textContent = "Heading of the page";
    console.log(heading1.textContent);
    

    const paragraph = document.getElementById("para") as HTMLParagraphElement;
    paragraph.textContent = "This is an paragraph element";
    console.log(paragraph.textContent);
    
}