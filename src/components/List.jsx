var React = require('react');
var ListItem = require('./ListItem.jsx');

var json = [{
            "id" : 1,
            "name" : "spark"
          },{
            "id" : 2,
            "name" : "spark2"
          },{
          "id" : 3,
          "name" : "spark3"
        }
];
var List = React.createClass({

    render : function () {
          var listItems = json.map(function(item){
            return <ListItem key={item.id} spark={item.name} />;
          });
          return (
            <ul>{listItems}</ul>
          );
    }
});


module.exports = List;
