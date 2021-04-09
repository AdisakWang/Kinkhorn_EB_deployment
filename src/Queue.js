import React, { Component } from "react";

class Queue extends Component {
    render() {
      const queue = {
        fontFamily: "sans-serif",
        fontSize: "48px"
      };
      return (
        <div style = {queue}>
            Queue 
            <div class="flex-container">
                <div>Store 1</div>
            </div> 
        </div>
      );
    }
  }
   
  export default Queue;