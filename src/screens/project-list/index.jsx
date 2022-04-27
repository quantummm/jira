import React from "react";
import { SearchPanel } from "./search-panel";
import { List } from "./list";
import { useState, useEffect } from "react";

export const ProjectListScreen = () => {

    const [param, setParam] = useState({
        name: '',
        personId: ''
    })

    const [list, SetList] = useState([])
    const [users, SetUsers] = useState([])

    useEffect(() => {
        fetch('').then(async response => {
            if (response.ok) {
                SetList(await response.json())
            }
        })
    }, [param])

    useEffect(() => {
        
    }, [])


    return <div>
        <SearchPanel param={param} setParam={setParam}/>
        <List list={list}/>
    </div>

}