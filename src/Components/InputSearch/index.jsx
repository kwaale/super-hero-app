import { useState } from "react";
import { useDispatch } from "react-redux";
import {getHeroesSearch} from '../../actions/heroesActions'

const InputSearch = () => {
    const [search, setSearch] = useState("");
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(getHeroesSearch(search))
    }
    const handleChange = (e) => {
        const { value} = e.target
        setSearch(value)
        console.log(value)
    }

    return (
        <div onSubmit={handleSubmit}>
            <input type="text" name = 'search' onChange={handleChange}/>
            <input type="submit" />
        </div>
    )

}
export default InputSearch;