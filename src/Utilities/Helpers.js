/* eslint-disable camelcase */
import React from 'react';

const useDynamicScript = (args) => {
    const scriptElement = React.useRef(null);
    const [ready, setReady] = React.useState(false);
    const [failed, setFailed] = React.useState(false);
    const getEntry = async (url) => {
        let manifest = await fetch(url).then((d) => d.json());
        manifest = manifest.advisor.entry[0];
        const result = manifest;

        const element = document.createElement('script');

        element.src = result;
        element.type = 'text/javascript';
        element.async = true;

        setReady(false);
        setFailed(false);

        element.onload = () => {
            console.log(`Dynamic Script Loaded: ${result}`);
            scriptElement.current = element;
            setReady(true);
        };

        element.onerror = () => {
            console.error(`Dynamic Script Error: ${result}`);
            setReady(false);
            setFailed(true);
        };

        document.head.appendChild(element);
    };

    React.useEffect(() => {
        if (!args.url) {
            return;
        }

        getEntry(args.url);

        return () => {
            if (scriptElement.current) {
                console.log(`Dynamic Script Removed: ${args.url}`);
                document.head.removeChild(scriptElement.current);
            }
        };
    }, [args.url]);

    return {
        ready,
        failed
    };
};

export { useDynamicScript };
