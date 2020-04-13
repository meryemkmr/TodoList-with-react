import React, { Component } from 'react'

class Corona extends Component {
    constructor(props) {
        super(props)
        this.state = {
            txt:'State',
            txt1:'Cases',
            txt2:'Today Cases',
            txt3:'Deaths',
            txt4:'Today Deaths',
            txt4:'Active',
            
           corona: [],
            searchResults: ""
        }
    }
        componentDidMount =(params)=> {
            let url = 'https://corona.lmao.ninja/states'
            fetch(url)
            .then(response=>{
                return response.json()
            })
            .then(corona=>{
                this.setState({
                    corona:corona
                })
            })
            
        }
        
    
    handleChange = (e) => {
        this.setState({
            searchResults: e.target.value
        })
    }



    render() {
        let filteredList = this.state.corona.filter((cor, index) => {
            return cor.state.toLowerCase().includes(this.state.searchResults.toLowerCase())
        })
        let coronaList = filteredList.map((cor, index) => {
            return <li>
                <h4>{cor.state}</h4>
                <br />
                {this.state.txt}<br />
                <p>{cor.cases}</p>
                <br />
                {this.state.txt1}<br />
                <p>{cor.todayCases}</p>
                <br />
                {this.state.txt2}<br />
                <p>{cor.deaths}</p>
                <br />
                {this.state.txt3}<br />
                <p>{cor.todayDeaths}</p>
                <br />
                {this.state.txt4}<br />
                <p>{cor.active}</p>
            </li>
        })
        return (
            <>
                {this.state.searchResults}<br />
                <input type="text" onChange={this.handleChange} />
                <ul>
                    {coronaList}
                </ul>
            </>
        )
    }
}

export default Corona
