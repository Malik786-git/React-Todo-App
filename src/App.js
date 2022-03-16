import React, { Component } from 'react'
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Plan from './Plan'


class App extends Component {
  state = {
    items: [],
    text: ""
  }
   handleChange = e => {
     this.setState({text:e.target.value})
   }
   handleAdd = e => {
     if (this.state.text !== '') {
       const items = [...this.state.items, this.state.text];
       this.setState({items: items, text: ""});
     }
   }
   handleDelete = id => {
    //  console.log('deleted', id);
    const Olditems = [...this.state.items];
    console.log('old items',Olditems);
    const items = Olditems.filter((ele, i)=>{
      return i !== id;
    })
    this.setState({items: items});
   }

  render() {
    return (
      <div className='container-fluid my-5'>
        <div className="row">
          <div className="col-sm-6 mx-auto text-white shadow-lg">
            <h1 className='text-center'>Today's Plan</h1>
            {/* head */}
            <div className="row">
              {/* get plan */}
              <div className="col-9">
                <input type="text" className='form-control' placeholder='Write Plan Here' value={this.state.text} onChange={this.handleChange}/>
              </div>
              {/* add button */}
              <div className="col-2">
                <button className="btn btn-warning px-3 fw-bold" onClick={this.handleAdd}>Add</button>
              </div>
              <div className="container-fluid">
                    <ul className='list-unstyled row m-5'>
                      {/* update state for plan */}
                      {/* <Plan/> */}
                      {/* {console.log(this.state.items)} */}
                      {
                        this.state.items.map((val, i)=>{
                          return <Plan key={i} value={val} id={i} sendData={this.handleDelete}/>
                        })
                      }
                    </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;



