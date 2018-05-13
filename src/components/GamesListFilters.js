import React from "react";
import { connect } from "react-redux";
import { setPlatform } from "../actions/filterActions";

class GamesListFilter extends React.Component {
  state={
    games:this.props.games
  }

  componentWillReceiveProps(){
    this.setState(()=>({
      games:this.props.games
    }))
  }

  render() {
    console.log(this.state)
    return (
      <div>
       Platform: <select onChange={e=>{
         console.log(e.target.value);
         this.props.dispatch(setPlatform(e.target.value));
        }}>
          {
            this.state.games?[...new Set(this.props.games.map(game=>game.platform))].map(platform => (
            <option key={platform} value={platform}>{platform}</option>
          )):""
        }
        </select>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    games: state.games,
    filters: state.filters,
    
  };
};

export default connect(mapStateToProps)(GamesListFilter);
