import { NavLink } from "react-router-dom";
import styles from "./extended-link.module.css";

export const ExtendedLink = ({ to, children }) => (
	<NavLink to={to}>
		{({ isActive }) =>
			isActive ? (
				<>
					<span className={styles.activeLink}>
						{children}
						<span className={styles.activeLinkIcon} />
					</span>
				</>
			) : (
				children
			)
		}
	</NavLink>
);
