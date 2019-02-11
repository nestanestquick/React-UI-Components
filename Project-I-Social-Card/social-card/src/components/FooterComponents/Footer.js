import React from 'react';
import './Footer.css';

class Footer extends React.Component {
    constructor(icon){
        super(icon);
        this.state = {share: 0, fav: 0};
    }
    render(){
        return(
            <div className = 'footerIcons'>
                <i className="far fa-comment"></i>
                <i className="fas fa-sync" onClick={this.shareValue}> {this.state.share}</i>
                <i className="far fa-heart" onClick={this.favValue}> {this.state.fav}</i>
                <i className="far fa-envelope"></i>
            </div>
        )
    }
}
export default Footer