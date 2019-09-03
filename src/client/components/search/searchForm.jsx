import React from 'react';
import styles from './style.scss';

class SearchForm extends React.Component {

    render() {
        return (
            <div>
                <p>{this.state.monkey}</p>
                <input className={styles.name} />
            </div>
        )
    }
}