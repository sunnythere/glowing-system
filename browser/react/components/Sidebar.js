import React from 'react';
import { Link } from 'react-router';


class Sidebar extends React.Component {

constructor(props) {
  super(props);

  const deselectAlbum = props.deselectAlbum;
}

render() {
  return (
    <sidebar>
      <img src="juke.svg" className="logo" />
      <section>
        <h4 className="menu-item active">
          <Link to="/albums">Albums</Link>
        </h4>
      </section>
    </sidebar>
  );
}


}

export default Sidebar;
