import React, { Component } from 'react'
import Axios from 'axios';
import List from './List'
export default class Form extends Component {
   
     state={
         tasks:[],
         title:'',
         description:'',
         id:''
     
        }

     componentDidMount=()=>{
        this.getTasks()
    }

     getTasks=()=>{
        Axios.get('http://localhost:3700/api/tasks')
        .then(res => {
            this.setState({tasks:res.data})    
            //console.log(this.state.tasks)        
        })
        .catch(err => console.log(err))
        }


    
    addTask=e=>{
        e.preventDefault();
        if(this.state.id){
        Axios.put(`http://localhost:3700/api/tasks/${this.state.id}`,this.state)
        .then(res => {
            console.log(res.data)
            window.M.toast({html: 'Task updated'});
            this.setState({title:'',description:'',id:''})   
            this.getTasks()   
        })
        
        }
        else{
            Axios.post('http://localhost:3700/api/tasks',this.state)
            .then(res => {
                console.log(res.data)
                //alert("Task saved");
                window.M.toast({html: 'Task Saved'});
                this.setState({title:'',description:''})   
                this.getTasks()   
            }) 
            .catch(err => console.log(err)) 
            //
        }    
      
    }

    deleteTask= id =>{

        if(window.confirm('are you sure you want to delete it?')){
            Axios.delete(`http://localhost:3700/api/tasks/${id}`)
            .then(res=> { 
              console.log(res)
              window.M.toast({html: 'Task deleted'});
              this.getTasks()
          })
        }    
      
    }

    editTask=(id)=>{
        Axios.get(`http://localhost:3700/api/tasks/${id}`)
        .then(res => {
            //console.log(res.data.title)
            this.setState({
                title:res.data.title,
                description:res.data.description,
                id:res.data._id
            })
            
        })
    }




    handleChange=(e)=>{
        const {name,value} = e.target;
        this.setState({
            [name]:value
        });

    }
   
   
    render() {
       
        return (
            <div className="row">   
            <div className="col s5">
            <div className="card">
            <div className="card-content">
            <form onSubmit={this.addTask}>
            <div className="row">
                <div className="input-field col s12">
                    <input name="title" type="text" 
                    onChange={this.handleChange} value={this.state.title}
                    placeholder="Task title" autoFocus/>
                </div>
                <div className="input-field col s12">
                  <textarea name="description" placeholder="Task Description" 
                        value={this.state.description}
                        onChange={this.handleChange} className="materialize-textarea" />
                </div>
            </div>
                     <button type="submit" className="btn light-blue darken-4">
                        Send
                     </button>
            </form>
            </div>
        </div>
        </div>
        <div className="col s7">
                    <List tasks={this.state.tasks} deleteTask={this.deleteTask} editTask={this.editTask} />
            </div>

        </div>
        )
    }
}

              