//WOD component - represents a single WOD item
Wod = React.createClass({
  //propTypes:{
    ////This component gets the task to display through a React prop.
    ////We can use propTypes to indicate it is required
    //wod: React.PropTypes.object.isRequired
  //},
  getInitialState() {
    return {
      wodName: '',
      girl: '',
      wodMovement: '',
      wodResult: '',
      fooBar: '',
    };
  },

  handleNameChange(e) {
    this.setState({
      wodName: e.target.value,
    });
  },
  handleGirlChange(e) {
    this.setState({
      girl: e.target.value,
    });
  },
  handleMovementChange(e) {
    this.setState({
      wodMovement: e.target.value,
    });
  },
  handleResultChange(e) {
    this.setState({
      wodResult: e.target.value,
    });
  },


  handleSubmit(e){
    e.preventDefault();
    var wodName = this.state.wodName;
    var girl = this.state.girl;
    var wodMovement = this.state.wodMovement;
    var wodResult = this.state.wodResult;

    Wods.insert({
      wodname: wodName,
      girl: girl,
      wodmovement: wodMovement,
      wodresult: wodResult,
      createdAt: new Date(),
    });

    //let newState = {};
    //['wodName', 'girl', 'wodMovement', 'wodResult', 'fooBar'].forEach( (ref) => {
      //newState[ref] = '';
      //this.ref[ref].value = '';
    //});

    //this.setState(newState);

    //Clear Form
    this.setState({
      wodName: '',
      girl: '',
      wodMovement: '',
      wodResult: '',
      fooBar: '',
    });
      $('input:text, textarea').val('');
      $('input:checkbox').attr('checked', false);
      $('select.form-select').prop('selectedIndex', 0);
  },

  updateFoobar(value) {
    this.setState({ fooBar: value });
  },
  updateMovement(){
    this.setState({wodMovement: value});
  },

  render() {
    return (
      <div>
        <form className='new-wod' onSubmit={this.handleSubmit} >
          <input type='text' ref="wodName" placeholder='Add Wod Name' onChange={this.handleNameChange} onSubmit={this.handleSubmit}/>
          <label>Is one of the Girls?</label><input type='checkbox' onChange={this.handleGirlChange} onSubmit={this.handleSubmit} />
          <input type='text' placeholder='Movement i.e. Power Clean' onChange={this.handleMovementChange} onSubmit={this.handleSubmit}/>
          <input type='text' placeholder='Your result i.e. 10:17 or 15 Rounds' onChange={this.handleResultChange} onSubmit={this.handleSubmit}/>
          <input type="submit"/>
        </form>
        <result />
      </div>
    );
  }
});

//<SpecialSelector currentValue={foo} updateFoobar={updateFoobar}/>
