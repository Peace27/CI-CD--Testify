// Create a length converter function

function lengthConverter(foot){
    const inch = foot * 0.08333
    return inch
}
const inchValue = lengthConverter(42)
console.log(inchValue)
