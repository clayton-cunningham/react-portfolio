import { Column } from "../../generic/Column";
import { Row } from "../../generic/Row";
import "./Weather.less";
import { WeatherReportStructure, getIcon } from "./helpers";

/**
 * A list of weather report details over the course of the next few days.
 * @param props 
 *              weatherReport   - response from the weather API
 */
export const WeatherList = (props: {weatherReport: WeatherReportStructure[]}) => {

    // TODO: at the end, make the alt text relevant to the results

    return (
            <Row>
            <div className="microWeather">
                {props.weatherReport.map(element => {
                    return (
                        <Column key={element.name}>
                            <p>{element.name}</p>
                            <img alt={`${element.name} image or data not available`} src={getIcon(element.shortForecast)} />
                            <p>{element.temperature}&deg;</p>
                            <p>{element.shortForecast}</p>
                        </Column>
                    );
                })}
                </div>
            </Row>
    )
}