import { useEffect, useState } from "react";

const useServices = () => {
    /* STATE DECLARE FOR LOAD DATA */
    const [services, setServices] = useState([]);

    /* LOAD JSON DATA */
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/Alamin934/pharmacy-fake-data/main/pharmacyFakeData.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return {
        services
    }
};

export default useServices;