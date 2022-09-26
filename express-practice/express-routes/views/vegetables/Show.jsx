const React = require('react');

class Show extends React.Component {
    render() {
        // object destructuring
        const { name, color } = this.props.vegetables;

        return (
            <div>
                <h1>Show Page</h1>
                <p>
                    The {name} is {color}.
                </p>
                <nav>
                    <a href="/vegetables">Back</a>
                </nav>
            </div>
        );
    }
}

module.exports = Show;