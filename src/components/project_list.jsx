import React from "react";
import Poloroid from "./poloroid";
import { TapeType } from "../App";

const ProjectList = ({}) => {

    return (
        <div className="row mx-4 justify-content-center flex-wrap">
            <div className="col-sm-12 col-md-6">
                <Poloroid picture={"/img/opengl_project.jpg"} alt={"foto met minecraft blokken"} picWidth="" description={"3D doolhof met OpenGL"} TapeType={TapeType.S} tapeColor1="pink-tape"/>
            </div>
            <div className="col-sm-12 col-md-6">
                <Poloroid picture={"/img/advProg_project.jpg"} alt={"foto die dashboard weergeeft"} picWidth="" description={"Webapp met microservices"} TapeType={TapeType.S} tapeColor1="green-tape"/>
            </div>
            <div className="col-sm-12 col-md-6">
                <Poloroid picture={"/img/cartopia_voorbeeld.png"} alt={"foto die een 3D model van auto laat zien"} picWidth="" description={"App met Augmented Reality"} TapeType={TapeType.S} tapeColor1="yellow-tape"/>
            </div>
            <div className="col-sm-12 col-md-6">
                <Poloroid picture={"/img/qiosk.jpg"} alt={"foto die homepage laat zien van de qios webapp"} picWidth="" description={"App, webapp en locatie tracker project"} TapeType={TapeType.S} tapeColor1="red-tape"/>
            </div>
            <div className="col-sm-12 col-md-6">
                <Poloroid picture={"/img/uhctf.jpg"} alt={"foto die winnaars van de UHCTF in 2023 laat zien (waar ik dus op sta met mijn team \"C24\")"} picWidth="" description={"Capture the flag UHasselt 2023"} TapeType={TapeType.S} tapeColor1="blue-tape"/>
            </div>
        </div>
    );

}

export default ProjectList;