export const  getRadius = (svgWidth,strokeWidth) => {
   const radius = (svgWidth/2) - (strokeWidth/2);
   return radius;
}

export const getDashArray = (svgWidth,strokeWidth) => {
    const r = getRadius(svgWidth,strokeWidth)
    const dasharray = Math.PI*(r*2);
    return dasharray;
}

export const getDashoffset = (svgWidth,strokeWidth,maxValue,currentValue) => {
    const dasharray = getDashArray(svgWidth,strokeWidth);
    const dashoffset = dasharray * (1 - currentValue/maxValue);
    return dashoffset;
}