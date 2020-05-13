/* eslint-disable camelcase */
/* eslint-disable jsx-control-statements/jsx-jcs-no-undef */
const API_URL = process.env.API_URL;
import { getToken } from "../../../utils/AuthService";

export const fetchAllLocationsApi = () =>
    fetch(`${API_URL}/api/locations`, {
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`,
        },
    })
        .then(res => res.json())
        .then(({ data }) => {
            return data.locations;
        });
