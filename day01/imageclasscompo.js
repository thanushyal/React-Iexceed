//printing image in class component
import React, { Component } from 'react';
class animal extends Component {
    render() {
        var url = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq7bZ0jYshbjpg7n1E9Zduy691H7rRCkGEVQ&s";
        return <img src = { url }
        />;
    }

}
export default animal;