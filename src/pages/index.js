import React, { Component } from 'react'
import { graphql } from 'gatsby'
import axios from 'axios'

// This query is executed at build time by Gatsby.
export const GatsbyQuery = graphql`
  {
    rickAndMorty {
      character(id: 1) {
        name
        image
      }
    }
  }
`

class ClientFetchingExample extends Component {
  state = {
    loading: false,
    error: false,
    pupper: {
      img: '',
      breed: '',
    },
  }

  componentDidMount() {
    this.fetchRicksPupper()
  }

  render() {
    const {
      rickAndMorty: { character },
    } = this.props.data

    const { img, breed } = this.state.pupper

    return (
      <div style={{ textAlign: 'center', width: '600px', margin: '50px auto' }}>
        <h1>{character.name} With His Pupper</h1>
        <p>
          Rick & Morty API data loads at build time. Dog API data loads at run
          time.
        </p>
        <div>
          <img
            src={character.image}
            alt={character.name}
            style={{ width: 300 }}
          />
        </div>
        <div>
          {this.state.loading ? (
            <p>Please hold, pupper incoming!</p>
          ) : img && breed ? (
            <>
              <h2>{`${breed} pupper!`}</h2>
              <img src={img} alt={`cute random `} style={{ maxWidth: 300 }} />
            </>
          ) : (
            <p>Oh noes, error fetching pupper :(</p>
          )}
        </div>
      </div>
    )
  }

  // This data is fetched at run time on the client.
  fetchRicksPupper = () => {
    this.setState({ loading: true })

    axios
      .get(`https://dog.ceo/api/breeds/image/random`)
      .then(pupper => {
        const {
          data: { message: img },
        } = pupper
        const breed = img.split('/')[4]

        this.setState({
          loading: false,
          pupper: {
            ...this.state.pupper,
            img,
            breed,
          },
        })
      })
      .catch(error => {
        this.setState({ loading: false, error })
      })
  }
}

export default ClientFetchingExample
