import { useEffect, useState } from "react";

export const SideBarHandler = () => {
	const [close, setClose] = useState<boolean>(false);

	useEffect(() => {
		if (close) {
			setTimeout(() => {
				setClose(false);
			}, 100);
		}
	}, [close]);

	return { close, setClose };
};  // Function Usage: `const { close, setClose } = HandleForceCloseSideNavBar()`


