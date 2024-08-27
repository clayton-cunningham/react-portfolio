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
        const rand = Math.floor(Math.random() * 2);
        axios.get("https://api.weather.gov/points/" + locations[rand])
            .then(res1 => {
                console.log(res1);
                // axios.get("https://api.weather.gov/gridpoints/TOP/31,80/forecast")
                axios.get(res1.data.properties.forecast)
                    .then(res => {
                if (res.status != 200) {
                    console.log("Error getting weather....");
                    return;
                }

                console.log(res);
                setWeatherReport(res.data.properties.periods.filter((p:{name:string}) => !p.name.includes("Night")));
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