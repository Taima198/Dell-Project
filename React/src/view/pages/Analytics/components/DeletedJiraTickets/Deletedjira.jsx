import React from 'react';
import "./DeletedJiraTickets.css";
import MainTable from "../MainTable/MainTable"

import Select from 'react-select'

import { useState, useEffect } from 'react';

const serverFilters = { priority: [], functionalTest: [], label: ["weekly"], qaRepresentative: [], startDate: [], endDate: [] };



function DeletedJira() {
  // To set UiObj from the filtered Data we recieved from server 
  // const [UiObjs, setUiObjs] = useState([]);

  // Options To Send == > Server 





  // Options To get From Server 
  const [priorityOptions, setPriorityOptions] = useState([])
  const [qaRepresentativeOptions, setQaRepresentativeOptions] = useState([])
  const functionalTestOptions = [
    { name: "functionalTest", value: "True", label: "True" },
    { name: "functionalTest", value: "False", label: "False" },

  ]



  const labelOptions = [
    { value: "daily", label: "Daily" },
    { value: "weekly", label: "Weekly" },
    { value: "monthly", label: "Monthly" },
    { value: "yearly", label: "Yearly" }
  ]


  // Functions ==> Fetch : 

  const render = (serverFilters)=> {
    fetch('/api/analytics/deletedJiraTickets', {
        method: 'POST',
        body: JSON.stringify({serverFilters}),
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then((res) => res.json())
        .then((data) => { console.log(data) })

      }


  useEffect(() => {

    // fetch('/api/analytics/----')
    //   .then(res => res.json())
    //   .then(data => {

    //     //set state (news)
    //     setUiObjs(data);
    //   })

    fetch('/api/analytics/deletedJiraTicketsFilters', {
        method: 'POST',
        body: JSON.stringify({startDate:serverFilters.startDate,endDate:serverFilters.endDate,label: ["weekly"]}),
        headers: {
          "Content-Type": "application/json"
        }
      })
      .then((res) => res.json())
      .then((data) => { console.log(data) })

  }
  , [])

///change priority:
const HandlePriorityChange = (priority => {
  console.log(priority.value)
  serverFilters.priority = [priority.value];
  render(serverFilters);
})

///change functionaltest
const HandlefunctionalTestChange = (status => {
  serverFilters.status = [status.value];
  render(serverFilters);
})
///change qaRepresentative:
const HandleqaRepresentativeChange = (Qa => {
  serverFilters.Qa = [Qa.value];
  render(serverFilters);
})
///change StartDate:
const HandleStartDateChange = (date => {
  console.log(date)
  serverFilters.date = (date.target.value);
  render(serverFilters);
})
///change EndDate:
const HandleEndDateChange = (date => {
  console.log(date.value)
  serverFilters.date = (date.target.value);
  render(serverFilters);
})
/// change leLabel:
const HandleLabelChange = (label => {
  console.log(label.value)
  serverFilters.label = [label.value];
  render(serverFilters);
})

return (

  <div className='DeletedJiraTicketsWrapper'>
    <div className="DeletedJiraTickets__Table" >
      <MainTable changes={true} />

    </div>
    <div className="DeletedJiraTickets__Title">Deleted Jira Tickets</div>

    {/* Select Filters */}

    <form className="DeletedJiraTickets__Filters">
      {/* select */}
      <Select
        name="priority"
        options={priorityOptions}
        placeholder="priority "
        className="DeletedJiraTickets__Filter"
        onChange={HandlePriorityChange}
      />

      <Select
        name="functional test"
        isMulti
        options={functionalTestOptions}
        placeholder="functional-Test "
        className="DeletedJiraTickets__Filter"
        onChange={HandlefunctionalTestChange}
      />

      <Select
        name="qaRepresentative"
        isMulti
        options={qaRepresentativeOptions}
        placeholder="Qa Representative "
        className="DeletedJiraTickets__Filter"
        onChange={HandleqaRepresentativeChange}
      />

      <input
        className="DeletedJiraTickets__Filter"
        type="date"
        name="startDate"
        onChange={HandleStartDateChange}
      />


      <input
        className="DeletedJiraTickets__Filter"
        type="date"
        name="endDate"
        onChange={HandleEndDateChange}
      />

      <Select
        name="labels"
        options={labelOptions}
        placeholder="Label"
        className="DeletedJiraTickets__Filter"
        onChange={HandleLabelChange}
      />

    </form>
  </div>
)
}




export default DeletedJira;