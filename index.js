function distanceFromHqInBlocks (pickup) {
    let distance;
    if (pickup >= 42) {
       return distance = pickup - 42;
    } if (pickup <= 42) {
        return distance = 42 - pickup;
    }
}

function distanceFromHqInFeet (beginning) {
    let distance = Math.abs((beginning - 42)*264);
    return distance;
}

function distanceTravelledInFeet (start, end) {
    let distance = Math.abs((start-end)*264);
    return distance;
}

function calculatesFarePrice (start, end) {
    let distance = Math.abs((start-end)*264);
        if (distance <= 400) {
            return distance * 0;
    }   if (distance > 400 && distance < 2000) {
            return (distance - 400) * 0.02;
    }   if (distance > 2000 && distance < 2500) {
            return 25;
    }   if (distance > 2500) {
            return "cannot travel that far";
    }
}
