const React = require('react');
const DefaultLayout = require('../layouts/DefaultLayout');

class Show extends React.Component {
    render() {
        // object destructuring
        const { name, color } = this.props.vegetables;

        return (
            <DefaultLayout>
            <div>
                <h1>Show Page</h1>
                <p>
                    The {name} is {color}.
                </p>
                <nav>
                    <a href="/vegetables">Back</a>
                </nav>
            </div>
            </DefaultLayout>
        );
    }
}

module.exports = Show;