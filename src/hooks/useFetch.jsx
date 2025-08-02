import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [state, setState] = useState({ data: null, isPending: true, error: null });

  useEffect(() => {
    const abortCont = new AbortController();

    setTimeout(() => {
      fetch(url, { signal: abortCont.signal })
        .then((res) => {
          if (!res.ok) {
            // error coming back from server
            throw Error("could not fetch the data for that resource");
          }
          return res.json();
        })
        .then((data) => {
          setState({ data, isPending: false, error: null });
        })
        .catch((err) => {
          if (err.name === "AbortError") {
            // fetch aborted
          } else {
            // auto catches network / connection error
            setState((prev) => ({ ...prev, isPending: false, error: null }));
          }
        });
    }, 1000);

    // abort the fetch
    return () => abortCont.abort();
  }, [url]);

  return state;
};

export default useFetch;
