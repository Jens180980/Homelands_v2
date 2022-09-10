import { useState, useContext, useEffect } from "react";
import axios from 'axios'
import { SearchContent } from "../StateManagement/SearchData";
import { authHeader } from '../StateManagement/Authorize'
import Style from '../../Assets/scss/SearchResult.module.scss'
import { Link } from "react-router-dom";

export const SearchResult = () => {
	const { searchData }  = useContext(SearchContent);
    const [ searchResult, setSearchResult ] = useState([])

	useEffect(() => {
		const getData = async () => {
			const result = await axios.get(`https://api.mediehuset.net/homelands/search/${searchData}`, { headers: authHeader() })
			setSearchResult(result.data.items)
		}
		getData();
	}, [searchData])

    console.log(searchResult)

	return (
		<section className={Style.wrapper}>
            <h2>Søgeresultater</h2>
            <table>
                <tr>
                    <th>Adresse</th>
                    <th>Kvadratmeter</th>
                    <th>Værelser</th>
                    <th>Pris</th>
                </tr>
            </table>
            {searchResult && searchResult.map(item => {
                return (
            <Link to={`/list/${item.id}`} key={item.id}>
                <table>
                    
                    <tr>
                        <td>{item.address}</td>
                        <td>{item.floor_space}</td>
                        <td>{item.num_rooms}</td>
                        <td>{item.price}</td>
                    </tr>
                </table>
            </Link>
                )
            })
            }
            {!searchResult ? () => {
            return (
                <p>Der var desværre ingen søgeresultater</p>
            ) 
            } : null }
			
		</section>
	)
}