import React from "react";
import { connect } from "react-redux";
import { setPlatform, setGenre, setEditorsChoice,setReleaseYear,setScore } from "../actions/filterActions";

class GamesListFilter extends React.Component {
  state = {
    games: this.props.games
  };

  componentWillReceiveProps() {
    this.setState(() => ({
      games: this.props.games
    }));
  }

  render() {
    return (
      <div className="games__filters--bar">

        <div className="games__filter">
          Platform:
          <select
            onChange={e => {
              this.props.dispatch(setPlatform(e.target.value));
            }}
          >
            {this.state.games
              ? [...new Set(this.props.games.map(game => game.platform))].map(
                  platform => (
                    <option key={platform} value={platform}>
                      {platform}
                    </option>
                  )
                )
              : ""}
          </select>
        </div>

        <div className="games__filter">
           Genre: <select
            onChange={e => {
              this.props.dispatch(setGenre(e.target.value));
            }}
             >
            {this.state.games
              ? [...new Set(this.props.games.map(game => game.genre))].map(
                  genre => (
                    <option key={genre} value={genre}>
                      {genre}
                    </option>
                  )
                )
              : ""}
            </select>
        </div>
        <div className="games__filter">
        
        </div>
        <div className="games__filter">
        
        </div>
        <div className="games__filter">
        
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    games: state.games,
    filters: state.filters
  };
};

export default connect(mapStateToProps)(GamesListFilter);
