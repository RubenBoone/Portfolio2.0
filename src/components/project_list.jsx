import React from "react";
import Poloroid from "./poloroid";

const ProjectList = ({}) => {

    return (
        <div className="row mx-4 justify-content-center flex-wrap align-items-stretch">
            <div className="col-sm-12 col-md-6">
                <Poloroid picture={"/img/opengl_project.jpg"} alt={"foto met minecraft blokken"} picWidth="" description={"3D doolhof met OpenGL"} rotate={5} tapeColor1="pink-tape" showmoreButton={1}/>
            </div>
            <div className="col-sm-12 col-md-6">
                <Poloroid picture={"/img/advProg_project.jpg"} alt={"foto die dashboard weergeeft"} picWidth="" description={"Webapp met microservices"} rotate={-2} tapeColor1="green-tape" showmoreButton={1}/>
            </div>
            <div className="col-sm-12 col-md-6">
                <Poloroid picture={"/img/cartopia_voorbeeld.png"} alt={"foto die een 3D model van auto laat zien"} picWidth="" description={"App met Augmented Reality"} rotate={1} tapeColor1="yellow-tape" showmoreButton={1}/>
            </div>
            <div className="col-sm-12 col-md-6">
                <Poloroid picture={"/img/qiosk.jpg"} alt={"foto die homepage laat zien van de qios webapp"} picWidth="" description={"App, webapp en locatie tracker project"} rotate={-4} tapeColor1="red-tape" showmoreButton={1}/>
            </div>
            <div className="col-sm-12 col-md-6">
                <Poloroid picture={"/img/uhctf.jpg"} alt={"foto die winnaars van de UHCTF in 2023 laat zien (waar ik dus op sta met mijn team \"C24\")"} picWidth="" description={"Capture the flag UHasselt 2023"} rotate={5} tapeColor1="blue-tape" showmoreButton={1}/>
            </div>
        </div>
    );

}

export default ProjectList;