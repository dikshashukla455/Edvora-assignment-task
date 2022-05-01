import { useStore } from '../../Context/Store';
import { Ride } from './Ride';
import  { sortByNearest } from '../../utils/helpers/helpers';
import styles from './Rides.module.css';



export const Rides = () => {
    const { user, getRides } = useStore();
    const ride = sortByNearest( getRides(), user.station_code )
    const { no_results } = styles;
    return (
        <div>
            { ride.length ? ride.map( ( r, i ) => (
                <Ride key = { i } station_code = { user.station_code } { ...r } /> )) :
                <div className = { no_results } ><h3>No Rides are available</h3></div>
            }
        </div>
    );
};