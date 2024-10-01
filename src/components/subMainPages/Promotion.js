import axios from "axios";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Promotion = () => {
    
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchPromotions();
    }, []);

    const fetchPromotions = async () => {
        try {
            setLoading(true);
            const token = window.localStorage.getItem("token");

            const options = {
                method: "GET",
                url: process.env.REACT_APP_BACKEND + "api/history",
                headers: {
                    "content-type": "application/x-www-form-urlencoded",
                    "x-auth-token": token,
                },
            };

            await axios
                .request(options)
                .then(function (response) {
                    console.log("responseeeeeeeeeee"+response.data);
                    const promos = response.data;
                   
                    
                })
                .catch(function (error) {
                    console.log(error);
                    setLoading(false);
                });
        } catch (error) {
            console.error("Error fetching promotions:", error);
        }
    };

    return (
        <div className='text-white flex justify-center h-[500px] items-center'>
            This is Promotion Page!
        </div>
    )
}
