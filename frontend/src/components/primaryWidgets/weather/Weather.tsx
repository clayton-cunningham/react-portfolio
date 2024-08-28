import { Column } from "../../generic/Column";
import { PageSection } from "../../generic/PageSection";
import { WeatherList } from "./MicroWeather";
import axios from "axios";
import "./Weather.less";
import { useState } from "react";
import { WeatherReportStructure, getDescription, getIcon, weatherLocationSamples } from "./helpers";
// @ts-ignore
import randomLocation from "random-location";

/**
 * Primary weather widget
 * @returns a component with weather details for a given area.
 *      Queries data from public API's to retrieve weather details.
 */
export const Weather = () => {

    const [weatherReport, setWeatherReport] = useState<WeatherReportStructure[]>([]);
    const [location, setLocation] = useState<string>("");
    const [disableButton, setDisableButton] = useState(false);

    const handleError = () => {
        console.log("Error getting weather....");
        setDisableButton(false);
        // TODO: add something that happens just in case...
    }

    const findWeather = () => {
        setDisableButton(true);

        try {
            const rand = Math.floor(Math.random() * weatherLocationSamples.length);

            // TODO: condense these calls

            // Choose a random location
            const randomPoint = randomLocation.randomCirclePoint(weatherLocationSamples[rand], 30000);
            // First get the lat/lon coordinates, then the weather
            axios.get("https://api.weather.gov/points/" + randomPoint.latitude.toFixed(3) + "," + randomPoint.longitude.toFixed(3))
                .then(res_LatLon => {
                    if (res_LatLon.status != 200) {
                        handleError();
                        return;
                    }
    
                    const latLoProp = res_LatLon.data.properties;
    
                    // Retrieve the weather info
                    axios.get(latLoProp.forecast)
                        .then(res => {
                            if (res.status != 200) {
                                handleError();
                                return;
                            }
    
                            // console.log(res);
                            setLocation(latLoProp.relativeLocation.properties.city + ", " + latLoProp.relativeLocation.properties.state);
                            // Only retrieve reports starting on each morning
                            // TODO: maybe add aggregation across the day?
                            setWeatherReport(res.data.properties.periods.filter((p:{startTime:string}) => p.startTime.split("T")[1].split("-")[0] == "06:00:00"));
                            setDisableButton(false);
                        })
                        .catch(e => {
                            handleError();
                        })
                })
                .catch(e => {
                    handleError();
                })
        } catch (e) {
            handleError();
        }
    }

    return (
        <div className="weatherContainer">
            <PageSection>
                <Column>
                    <h1 id="title">Weather</h1>
                    <h3>Find some weather in one of the areas where I want to work!</h3>
                    <button onClick={() => findWeather()} disabled={disableButton}>Find some weather!</button>
                    {weatherReport.length > 0 && (
                        <div className="dynamicRow">
                            <Column className="mainIcon">
                                <h2>{location}</h2>
                                <img alt="Image not available" src={getIcon(weatherReport[0]?.shortForecast)} />
                                <h3>{weatherReport[0]?.temperature}&deg;</h3>
                                <h3>{getDescription(weatherReport[0]?.shortForecast)}</h3>
                            </Column>
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