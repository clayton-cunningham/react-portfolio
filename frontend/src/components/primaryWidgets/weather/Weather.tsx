import { Column } from "../../generic/Column";
import { PageSection } from "../../generic/PageSection";
import { WeatherList } from "./MicroWeather";
import axios from "axios";
import "./Weather.less";
import { useEffect, useState } from "react";
import { WeatherReportStructure, getDescription, getIcon, weatherLocationSamples } from "./helpers";
// @ts-ignore
import randomLocation from "random-location";

/**
 * Primary weather widget
 * @returns a component with weather details for a given area.
 *      Queries data from public API's to retrieve weather details.
 */
export const Weather = () => {

    const [latLongData, setLLData] = useState<any>(null);
    const [weatherData, setWData] = useState<any>(null);
    const [weatherReport, setWeatherReport] = useState<WeatherReportStructure[]>([]);
    const [location, setLocation] = useState<string>("");

    // Flags to control animation / disabling
    const [disable, setDisabled] = useState(false);
    const [reveal, setReveal] = useState(false);
    const [retrievingFlag, setRetrievingFlag] = useState(false);
    const [animationPlaying, setAnimationPlaying] = useState(true);
    const [reset, setReset] = useState(false);

    const handleError = (e:any) => {
        console.log("Error getting weather....");
        console.log(e);
        setRetrievingFlag(false);
        setDisabled(false);
        // TODO: add something that happens just in case...
        // TODO: handle animation in case of error
    }

    // const requestComplete = () => {
    //     // Sync together animation and API retrieval
    //     if (animationPlaying || retrievingFlag) return;
    //     if (weatherData == null || latLongData == null) return;

    //     // Only retrieve reports starting on each mornings
    //     // TODO: maybe add aggregation across the day?
    //     setWeatherReport(weatherData.periods.filter((p:{startTime:string}) => p.startTime.split("T")[1].split("-")[0] == "06:00:00"));
    //     setLocation(latLongData.relativeLocation.properties.city + ", " + latLongData.relativeLocation.properties.state);
    //     setDisabled(false);
    // }

    useEffect(() => {
        // Sync together animation and API retrieval
        if (animationPlaying || retrievingFlag) return;
        if (weatherData == null || latLongData == null) return;
        setReset(true);
        setReveal(true);
        new Promise(() => setTimeout(() => {setReveal(false);}, 2000));

        // Only retrieve reports starting on each mornings
        // TODO: maybe add aggregation across the day?
        setWeatherReport(weatherData.periods.filter((p:{startTime:string}) => p.startTime.split("T")[1].split("-")[0] == "06:00:00"));
        setLocation(latLongData.relativeLocation.properties.city + ", " + latLongData.relativeLocation.properties.state);
        setDisabled(false);
        new Promise(() => setTimeout(() => {setReset(false);}, 500));
    }, [animationPlaying, weatherData, latLongData])

    const findWeather = async () => {
        setRetrievingFlag(true);
        setAnimationPlaying(true);
        setDisabled(true);
        new Promise(() => setTimeout(() => {setAnimationPlaying(false);}, 2000));

        try {
            const rand = Math.floor(Math.random() * weatherLocationSamples.length);

            // TODO: condense these calls

            // Choose a random location
            const randomPoint = randomLocation.randomCirclePoint(weatherLocationSamples[rand], 30000);
            // First get the lat/lon coordinates, then the weather
            axios.get("https://api.weather.gov/points/" + randomPoint.latitude.toFixed(3) + "," + randomPoint.longitude.toFixed(3))
                .then(res_LatLon => {
                    if (res_LatLon.status != 200) {
                        throw new Error("Status code from Lat Long API was " + res_LatLon.status);
                    }
    
                    // Retrieve the weather info
                    axios.get(res_LatLon.data.properties.forecast)
                        .then(async res => {
                            if (res.status != 200) {
                                throw new Error("Status code from Weather API was " + res_LatLon.status);
                            }
    
                            // await new Promise(f => setTimeout(f, 500));
                            // await new Promise(f => setTimeout(f, 1000));
                            setWData(res.data.properties);
                            setLLData(res_LatLon.data.properties);
                            // console.log(res);
                            setRetrievingFlag(false);
                        })
                        .catch(e => {
                            handleError(e);
                        })
                })
                .catch(e => {
                    handleError(e);
                })
        } catch (e) {
            handleError(e);
        }
    }

    return (
        <div className="weather-container">
            <PageSection>
                <Column>
                    <h1 id="title">Weather</h1>
                    <h3>Find some weather in one of the areas where I want to work!</h3>
                    <button onClick={() => findWeather()} disabled={disable}>Find some weather!</button>
                    {weatherReport.length > 0 && (
                        <div style={{ minHeight: "400px"}}>
                            {
                                !reset && (
                                    <div className="dynamic-row">
                                        <Column className="fade-up">
                                            <h2>{location}</h2>
                                            <img className="icon-img" alt={"Image not available; " + weatherReport[0]?.shortForecast} src={getIcon(weatherReport[0]?.shortForecast)} />
                                            <h3>{weatherReport[0]?.temperature}&deg;</h3>
                                            <h3>{getDescription(weatherReport[0]?.shortForecast)}</h3>
                                        </Column>
                                        <WeatherList 
                                            weatherReport={weatherReport}
                                        />
                                        {/* <img className="background-image" src="thunderBg.png" /> */}
                                    </div>
                                )
                            }
                        </div>
                    )}
                    {disable && (
                        <div>
                            <div className="slide" id="slide-right" />
                            <div className="slide" id="slide-up-left" />
                            <div className="slide" id="slide-up" />
                        </div>
                    )}
                    {reveal && (
                        <div>
                            <div className="slide" id="slide-out-down-left" />
                        </div>
                    )}
                </Column>
            </PageSection>
        </div>
    )
}