import React from "react";

export default function useDebounceEffect(
  callback: (...args: any[]) => void,
  ms: number
) {
  React.useEffect(() => {
    const timeout = setTimeout(callback, ms);
    return () => clearTimeout(timeout);
  }, [callback, ms]);
}
