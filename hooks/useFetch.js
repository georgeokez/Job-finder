import { useState, useEffect } from "react";
import axios from "axios";
//import { RAPID_API_KEY } from "@env";

const rapidApiKey = "f7fc7b61b1msh10152ca9281b4ebp145ce1jsn8d8eb575e87c";

export const useFetch = (urlParam, userQuery) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${urlParam}`,
    headers: {
      "X-RapidAPI-Key": rapidApiKey,
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
    params: { ...userQuery },
  };

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await axios.request(options);
      setData(response.data.data);

      setIsLoading(false);
    } catch (error) {
      setError(error);
      alert("An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    isLoading(true);
    fetchData();
  };

  return { data, isLoading, error, refetch };
};
