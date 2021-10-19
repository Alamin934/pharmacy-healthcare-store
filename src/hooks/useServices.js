import { useEffect, useState } from "react";

const useServices = () => {

    const [services, setServices] = useState([]);

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