import React, { Component } from 'react'

export default class Albums extends Component {
  render () {
    return (
      <div className="col-xs-10">
        <h3>Albums</h3>
        <div className="row">

          {this.props.albums ?
            this.props.albums.map((album) => {
              return (
                <div key={album.id} className="col-xs-4">
                  <a className="thumbnail" href="#">
                    <img src="http://placeholdit.imgix.net/~text?txtsize=33&txt=ALBUMoneIMAGE&w=300&h=300" />
                    <div className="caption">
                      <h5>
                        <span>{album.name}</span>
                      </h5>
                      <small>{album.songs.length} songs</small>
                    </div>
                  </a>
                </div>
              )
          })
          : null
          }

        </div>
      </div>
    )
  }
}
