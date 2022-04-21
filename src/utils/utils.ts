export function daysUntilWedding(){
    const weddingDate = new Date("06/24/2023");
    const today = new Date();
    return Math.floor((weddingDate.getTime()-today.getTime())/(1000*60*60*24));
}