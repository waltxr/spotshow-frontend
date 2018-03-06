import React from 'react'
import { Card, Image, Button} from 'semantic-ui-react'
import * as actions from '../actions/index';
import AddVenueButton from './AddVenueButton'
import Time from 'react-time-format'
import { withRouter } from 'react-router';
import { connect }  from 'react-redux';
import RemoveVenueButton from './RemoveVenueButton'


class ShowCard extends React.Component {

  addOrRemoveVenueButton = () => {    
    if (this.props.favoriteVenues.filter((venue) => venue.name === this.props.venue.name).length > 0 ) {
      return (
        <RemoveVenueButton venue={this.props.venue}/>
        )
    } else {
      return (
        <AddVenueButton venue={this.props.venue}/>
        )
      }
    }

  render() {

    let time = new Date(this.props.time)

    return(
      <Card>
       <Image src={this.props.image} />
       <Card.Content>
         <Card.Header>{this.props.artists}</Card.Header>
         <Card.Meta>{this.props.date}</Card.Meta>
         <Card.Description>{this.props.name}</Card.Description>
         <Card.Description>
           <Time value={time} format="hh:mm" />
         </Card.Description>
         <Card.Description>{this.props.venue.name}</Card.Description>
       </Card.Content>
       <Card.Content extra>
         <a href={this.props.url} target="_blank">ticket link</a><br></br>
         {this.addOrRemoveVenueButton()}
       </Card.Content>
     </Card>
    )
  }

}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser,
    favoriteVenues: state.favoriteVenues
  }
}

export default withRouter(connect(mapStateToProps, actions)(ShowCard))
