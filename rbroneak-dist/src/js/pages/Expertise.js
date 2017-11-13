import React, { Component } from 'react';
import firebase from '../data/firebase.js';
import ListMaker from '../components/listMaker';

let bio = firebase.app().database().ref("expertiseList");

class Bio extends Component {
    constructor() {
        super();
        this.state = {
            client: '',
            items: []
        }
    }
    componentDidMount() {
        const itemsRef = firebase.database().ref().child('expertise');
        itemsRef.on('value', (snapshot) => {
            let items = snapshot.val();
            let newState = [];
            for (let item in items) {
                newState.push({
                    id: item.id,
                    title: items[item].title,
                    intro: items[item].intro,
                    clients: items[item].expertiseList
                });
            }
            this.setState({
                items: newState
            });
        });
    }
    render() {
        return (
            <section className="container">
                {this.state.items.map((item) => {
                    return (
                        <div key={item.id}>
                            <h1>{item.title}</h1>
                            <h2>{item.intro}</h2>
                            <div className="align-left-top">
                                <ListMaker list={item.clients}></ListMaker>
                            </div>
                        </div>
                    )
                })}
            </section>
        );
    }
}
export default Bio;