import { Column } from "../../generic/Column";
import { PageSection } from "../../generic/PageSection";
import { WeatherList } from "./MicroWeather";
import axios from "axios";
import "./Weather.less";
import { useState } from "react";
import { WeatherReportStructure, getIcon } from "./helpers";

/**
 * Primary weather widget
 * @returns a component with weather details for a given area.
 *      Queries data from public API's to retrieve weather details.
 */
export const Weather = () => {

    const locations = ["39.7456,-97.0892", "38.9064,-77.0359"];
    const [weatherReport, setWeatherReport] = useState<WeatherReportStructure[]>([]);


    const findWeather = () => {
        // Choose a random location
        // TODO: add more options / geolocation randomness
        const rand = Math.floor(Math.random() * 2);

        // First get the lat/lon coordinates, then the weather
        axios.get("https://api.weather.gov/points/" + locations[rand])
            .then(res_LatLon => {
                if (res_LatLon.status != 200) {
                    console.log("Error getting weather....");
                    return;
                }
                axios.get(res_LatLon.data.properties.forecast)
                    .then(res => {
                if (res.status != 200) {
                    console.log("Error getting weather....");
                    return;
                }

                console.log(res);
                // Only retrieve reports starting on each morning
                // TODO: maybe add aggregation across the day?
                setWeatherReport(res.data.properties.periods.filter((p:{startTime:string}) => p.startTime.split("T")[1].split("-")[0] == "06:00:00"));
            })
        })
    }

    // TODO: at the end, make the alt text relevant to the results

    return (
        <div className="weatherContainer">
            <PageSection>
                <Column>
                    <h1>Weather</h1>
                    <button onClick={() => findWeather()}>Find some weather!</button>
                    {weatherReport.length > 0 && (
                        <div>
                            <img alt="Image not available" src={getIcon(weatherReport[0]?.shortForecast)} />
                            <p>{weatherReport[0]?.temperature}&deg;</p>
                            <p>{weatherReport[0]?.shortForecast}</p>
                            <WeatherList 
                                weatherReport={weatherReport}
                            />
                        </div>
                    )}
                </Column>
            </PageSection>
        </div>
    )
}