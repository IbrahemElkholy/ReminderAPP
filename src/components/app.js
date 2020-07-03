import React, { Component } from 'react'
import { add_reminder, remove_reminder, clear_reminders } from '../actions'
import { connect } from 'react-redux'
import moment from 'moment'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import logo from './reminder2.png'
class APP extends Component {
    state = {
        text: "",
        date: new Date()
    }
    renderReminder = () => {
        const reminds = this.props.remiders
        return (
            <ul className="list-group">
                {
                    reminds.map(reminder => {
                        return (

                            <li className="list-group-item" key={reminder.id}>
                                <div>{reminder.text}</div>
                                <div>{moment(new Date(reminder.date)).fromNow()}</div>
                                <div className="remove btn btn-danger" onClick={() => this.props.remove_reminder(reminder.id)}>X</div>
                            </li>

                        )
                    })
                }
            </ul>
        )
    }
    render() {
        return (
            <div className="container">
                <img src={logo} />
                <div className="reminder-title">
                    <h2>What should you do ?</h2>
                </div>

                <input
                    className="form-controle"
                    type="text"
                    value={this.state.text}
                    placeholder=" Enter what u think ....!"
                    onChange={(e) => this.setState({ text: e.target.value })}
                />


                <DatePicker
                    className="form-controle"
                    selected={this.state.date}
                    onChange={(date) => { this.setState({ date: date }) }}
                    showTimeSelect
                    placeholder="Enter your date"
                    placeholderText="Enter your date"
                    timeFormat="HH:mm"
                    timeCaption="time"
                    dateFormat="MMMM d, yyyy h:mm aa"
                />


                <button
                    className="btn btn-primary btn-block"
                    onClick={() => {
                        this.props.add_reminder(this.state.text, this.state.date)
                        this.setState({
                            text: '',
                            date: ''
                        })
                    }}
                >Add Reminder</button>
                <div>{this.renderReminder()}</div>
                <button className="btn btn-danger btn-block" onClick={() => {
                    this.props.clear_reminders()
                    this.setState({
                        text: '',
                        date: ''
                    })
                }}>Clear Reminders</button>
            </div>
        )
    }
}

// function mapDispatchToProps(dispath){
//     return{
//         add_reminder:()=>dispath(add_reminder())
//     }

// }

export default connect(state => {
    return {
        remiders: state
    }
}, { add_reminder, remove_reminder, clear_reminders })(APP)