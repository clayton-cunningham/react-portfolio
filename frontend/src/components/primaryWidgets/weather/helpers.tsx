
export type WeatherReportStructure = {
    name: string,
    number: number,
    shortForecast: string,
    temperature: number,
}

// Retrieve the corresponding image for a weather description
export const getIcon = (descrip: string) => {
    if (descrip == "Sunny") return "sunny.png";
    if (descrip == "Mostly Sunny" || descrip == "Partly Sunny") return "mostlySunny.png";
    if (descrip == "Mostly Cloudy" || descrip == "Partly Cloudy") return "partlyCloudy.png";
    if (descrip == "Cloudy") return "cloudy.png";
    if (descrip.includes("Thunder")) return "thunderstorms.png";
    if (descrip.includes("Rain")) return "rainy.png";
    // TODO: get a better template image
    else return "001.png";
}
