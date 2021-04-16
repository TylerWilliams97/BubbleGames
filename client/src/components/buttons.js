import React from "react";
import {Button} from "react-bootstrap"
import API from "../utils/API";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";



export default function routeButtons() {
   
   
return(
    <Button variant="contained" color="primary" onClick={API.btnRoute}>Game Name</Button>
)
}
