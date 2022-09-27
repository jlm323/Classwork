const React = require('react');
const DefaultLayout = require('../layouts/DefaultLayout');

class Index extends React.Component {
    render() {
        // object destructuring (short for const fruits = this.props.fruits)
        const { vegetables } = this.props;

        return (
            <DefaultLayout>
            <div>
                <h1>Vegetables Index Page</h1>
                <ul>
                    {vegetables.map((vegetables, i) => {
                        return (
                            <li key={i}>
                                The <a href={`/vegetables/${i}`}>{vegetables.name}</a> is {vegetables.color}.
                            </li>
                        )
                    })}
                    
                </ul>

                <nav>
                    <a href='/vegetables/New'>Create a new vegetable</a>
                </nav>
            </div>
            </DefaultLayout>
        );
    }
}

module.exports = Index;