var React = require('react');
var previewActions = require('../actions/previewActions');

var Header = React.createClass({
  render: function() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">Markdown</a>
          </div>
          <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav navbar-right">
              
            </ul>
          </div>
        </div>
      </nav>
    );
  },
  _onClick_b: function(e) {
    previewActions.onClick_b();
  },
  _onClick_code: function(e) {
    previewActions.onClick_code();
  },
  _onClick_i: function(e) {
    previewActions.onClick_i();
  }
});

module.exports = Header;
