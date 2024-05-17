// customHook.ts
import { useEffect, useState } from "react";

export const useCustomHook = () => {
	const [count, setCount] = useState(0);

	useEffect(() => {
		setCount(count + 1);
	}, [count]);

	return count;
};
