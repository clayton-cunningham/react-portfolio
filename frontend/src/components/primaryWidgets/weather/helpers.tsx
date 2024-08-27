
export type WeatherReportStructure = {
    name: string,
    number: number,
    shortForecast: string,
    temperature: number,
}

// Retrieve the corresponding image for a weather description
export const getIcon = (descrip: string) => {
    if (descrip == "Sunny") return "sunny.png";
    if (descrip == "Mostly Sunny") return "mostlySunny.png";
    // TODO: get a better template image
    else return "001.png";
}
