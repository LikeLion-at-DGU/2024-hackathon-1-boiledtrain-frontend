import React,{useState} from "react";
import Head from "../components/Course/Head"
import Search from "../components/Course/Search"
import Select from "../components/Course/Select";
import CourseContent from "../components/coursetrain/CourseContent";

const Course=()=>{
    const [selected,setSelected]=useState(1);
    const [selected2,setSelected2] = useState(1);
    return(
        <>
            <Head 
            selected={selected} 
            onSelect={setSelected}/>
            <Search
            selected={selected}/>
            <Select
            selected={selected}
            selected2={selected2}
            onSelect2={setSelected2}
            />
            <CourseContent/>
        </>
    )
}

export default Course;