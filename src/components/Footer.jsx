import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <p>© {new Date().getFullYear()} Srri TodoList. All rights reserved.</p>
      </footer>
    );
  }
}

export default Footer;
