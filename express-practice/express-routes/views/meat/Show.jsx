const React = require('react');
const DefaultLayout = require('../layouts/DefaultLayout');

class Show extends React.Component {
    render() {
        // object destructuring
        const { name, type } = this.props.meat;

        return (
            <DefaultLayout title={`${name} details`} foodGroup="meat">
            <div>
                <h1>Show Page</h1>
                <p>
                    The {name} is {type}.
                </p>
                <nav>
                    <a href="/meat">Back</a>
                </nav>
            </div>
            </DefaultLayout>
        );
    }
}

module.exports = Show;