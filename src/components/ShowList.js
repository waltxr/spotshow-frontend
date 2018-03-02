import React from 'react'
import ShowCard from './ShowCard'
import { Card, Loader, Dimmer, Segment } from 'semantic-ui-react'

class ShowList extends React.Component {

  getImageUrl = index => {
    return this.props.events[index].artists.find((artist) => {
      if (artist.image_url) {
        return artist.image_url
      }
    })
  }

  listAllArtists = index => {
    let a = []
     this.props.events[index].artists.map((artist) => {
      a.push(artist.name)
    })

    return a.join(",  ")
  }

  getShow = () => {
    console.log(this.props.events)
    return this.props.events.map((event, index) => {
      return (
        <ShowCard
          key={event.id}
          name={event.display_name}
          date={event.date}
          time={event.time}
          venue={event.venue.name}
          url={event.uri}
          artists={this.listAllArtists(index)}
          image={this.getImageUrl(index).image_url}
        />
      )
    })
  }

  render() {
    return (
      <Card.Group centered itemsPerRow={3}>{this.getShow()}</Card.Group>
    )
  }
}


export default ShowList