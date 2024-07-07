import React from "react";
import './skills.css'
import { UserList } from "@phosphor-icons/react";

function Skills() {
    return (
        <div class="container text-center" id="Habilidades">
            <div class="row">
                <div class="col-12">
                    <h1>
                       <UserList size={70}
                       color="#203246"
                       weight="bold" />
                         Habilidades
                    </h1>
                </div>
                
            </div>
        </div>
    )
}

export default Skills