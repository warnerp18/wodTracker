//App component - represents the whool app
App = React.createClass({

  //This mixin makes the getMeteorData mehtod work
  mixins: [ReactMeteorData],

  skillSelect(){
    if($('select').val() === 'Wod' ){
      console.log('wod');
    };
    if($('select').val() === 'Strength/Skill' ){
      console.log('skill');
    };
    if($('select').val() === 'Other' ){
      console.log('other');
    }
  },
  getMeteorData(){
    return{
      wods: Wods.find({}).fetch(),
    }
  },

  renderWods() {
    //Get wods from this.data.wads
    console.log(this.data.wods);
    return this.data.wods.map((wod) => {
      return wod;
    });
  },

  render(){
    return (
      <div className="container">
        <header>
          <h1>Wod Tracker</h1>
          <form>
            <select onChange={this.skillSelect}>
              <option name='wod'>Wod</option>
              <option name='skill'>Strength/Skill</option>
              <option name='other'>Other</option>
            </select>
          </form>
        <Wod />
        </header>
        <wods wods={this.data.wods}/>
        {this.data.wods.wodname}
      </div>
    );
  },

})
