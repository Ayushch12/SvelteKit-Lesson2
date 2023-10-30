export const load = async (loadEvent) => {
    const { fetch } = loadEvent; // corrected typo "fetch" instead of "fetchh"
    const response = await fetch("http://localhost:4000/api/postcodes");
    const postcodes = await response.json(); // corrected variable name "products" to "postcodes"
    const addressList = postcodes.map((postcode) => { // corrected variable name "poastcode" to "postcode"
        return `${postcode.buildingName}, ${postcode.line1}, ${postcode.line2}`; // corrected backticks position and variable name "poastcode" to "postcode"
    });

    return { addressList }; // corrected placement of curly braces
};
