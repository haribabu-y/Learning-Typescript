function addValue(): boolean {
    const resultElement = document.getElementById("result") as HTMLParagraphElement;
    const value1 = document.getElementById("value1") as HTMLInputElement;
    const value2 = document.getElementById("value2") as HTMLInputElement;

    // Ensure we correctly convert values to numbers before addition
    const res: number = addTheValues(Number(value1.value), Number(value2.value));
    
    console.log(res);
    
    resultElement.textContent = res.toString(); // Convert number to string for display
    return false;
}

function addTheValues(value1: number, value2: number): number {
    return value1 + value2;
}
