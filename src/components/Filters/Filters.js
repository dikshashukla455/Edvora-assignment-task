import { useState } from "react";
import { useStore } from "../../Context/Store";
import { DropMenu } from "./DropMenu";

import { BsFilterLeft } from "react-icons/bs";
import styles from "./Filters.module.css";

export const Filters = () => {
	const { btn_filter, fltr_cm, filter_relative, links, active, icon } = styles;

	const [showMenu, setShowMenu] = useState(false);
	const { rides, handleRides, selectUpcomingRides, selectPastRides } =
		useStore();

	// handle classes
	const nearestRide = rides === "" ? active : null;
	const upcoming = rides === "upcoming" ? active : null;
	const past = rides === "past" ? active : null;

	// get rides length
	const upcomingCount = selectUpcomingRides().length;
	const pastCount = selectPastRides().length;

	return (
		<div className="container">
			<div className={fltr_cm}>
				<ul className={links}>
					<li onClick={() => handleRides("")} className={nearestRide}>
						Nearest rides
					</li>

					<li onClick={() => handleRides("upcoming")} className={upcoming}>
						<span>Upcoming rides {`(${upcomingCount})`}</span>
					</li>

					<li onClick={() => handleRides("past")} className={past}>
						<span>Past rides {`(${pastCount})`}</span>
					</li>
				</ul>

				<div className={filter_relative}>
					<div
						onClick={() => setShowMenu((prev) => !prev)}
						className={btn_filter}
						role="button"
					>
						<span className={icon}>
							<BsFilterLeft />
						</span>
						Filters
					</div>
					{showMenu ? <DropMenu setMenu={setShowMenu} /> : <></>}
				</div>
			</div>
		</div>
	);
};
