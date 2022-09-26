const React = require('react');

class Show extends React.Component {
    render() {
        // object destructuring
        const { name, type } = this.props.meat;

        return (
            <div>
                <h1>Show Page</h1>
                <p>
                    The {name} is {type}.
                </p>
                <nav>
                    <a href="/meat">Back</a>
                </nav>
            </div>
        );
    }
}

module.exports = Show;