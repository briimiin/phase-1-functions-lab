// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation){
 const hqLocation = 42;
 return Math.abs(hqLocation - pickupLocation);

}
function distanceFromHqInFeet(pickupLocation){
    const feetPerBlock = 264;
    return distanceFromHqInBlocks(pickupLocation)*feetPerBlock;
}
function distanceTravelledInFeet(start, destination){
    const feetPerBlock = 264;
    return Math.abs(destination-start)*feetPerBlock;

}
function calculatesFarePrice(start, destination){
    const feetPerBlock = 264;
    const distance = Math.abs(destination - start)*feetPerBlock;
    if (distance <= 400){
        return 0;
    } else if (distance<= 2000){
        const distanceAfterFree = distance - 400;
        return distanceAfterFree*0.02;
    }else if (distance <= 2500){
        return 25;
    }else{
        return 'cannot travel that far';
    }

    }
    