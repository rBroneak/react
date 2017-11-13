import React , { Component }from 'react';

export class Livebackground extends Component {

    componentDidMount() {
        setInterval(() => {
            this.setState(() => {
                //console.log('setting state');
                return { unseen: "does not display" }
            });
        }, 1000);
    }
    render() {
        let bg = {
            backgroundImage: "url("+this.props.bg+")"
        };
        return(
            <div className="backgroundImage" style={bg}></div>
        )
    }
}

export default Livebackground;