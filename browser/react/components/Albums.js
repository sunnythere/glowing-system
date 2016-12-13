import React from 'react';
import {Link} from 'react-router';


class Albums extends React.Component {

constructor(props) {
  super(props);

  const albums = props.albums;
  const selectAlbum = props.selectAlbum;

}

render() {
  return (
    <div>
      <h3>Albums</h3>
      <div className="row">
      {
        albums.map(album => (
          <div className="col-xs-4" key={ album.id }>

            <Link to={`/albums/${this.props.albumId}`}>

            <img src={ album.imageUrl } />
              <div className="caption">
                <h5>
                  <span>{ album.name }</span>
                </h5>
                <small>{ album.songs.length } songs</small>
              </div>

            </Link>
          </div>
        ))
      }
      </div>
    </div>
  );
}

}

export default Albums;
