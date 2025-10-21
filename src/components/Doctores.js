
import React, { Component } from 'react'
import axios from 'axios';
import Global from '../Global';
export default class Doctores extends Component {
    url = Global.apiDoctores;

    state = {
        doctores: []
    }

    loadDoctoresHospital = () => {
        let request = "api/doctores/doctoreshospital/" + this.props.idhospital;
        axios.get(this.url + request).then(response => {
            console.log("Leyendo doctores");
            this.setState({
                doctores: response.data
            })
        })
    }

    componentDidMount = () => {
        this.loadDoctoresHospital();
    }

    componentDidUpdate = (oldProps) => {
        if (oldProps.idhospital != this.props.idhospital){
            this.loadDoctoresHospital();
        }
    }

  render() {
    return (
      <div>
        <h2>
            Doctores hospital: 
            <span style={{color:"red"}}>
                {this.props.idhospital}
            </span>
        </h2>
        <table className='table table-primary'>
            <thead>
                <tr>
                    <th>Apellido</th>
                    <th>Especialidad</th>
                    <th>Salario</th>
                    <th>Id Hospital</th>
                </tr>
            </thead>
            <tbody>
                {
                    this.state.doctores.map((doctor, index) => {
                        return(<tr key={index}>
                            <td>{doctor.apellido}</td>
                            <td>{doctor.especialidad}</td>
                            <td>{doctor.salario}</td>
                            <td>{doctor.idHospital}</td>
                        </tr>)
                    })
                }
            </tbody>
        </table>
      </div>
    )
  }
}
