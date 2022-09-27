const React = require('react');
const DefaultLayout = require('../layouts/DefaultLayout');

class Show extends React.Component {
    render() {
        // object destructuring
        const { name, color, readyToEat } = this.props.fruit;

        return (
            <DefaultLayout title={`${name} details`} foodGroup="fruits">
            <div>
                <h1>Show Page</h1>
                <p>
                    The {name} is {color}.
                </p>
                <p>
                    {readyToEat ? "It is ready to eat" : "It is not ready to eat"}.
                </p>
                <nav>
                    <a href="/fruits">Back</a>
                </nav>
            </div>
            </DefaultLayout>
        );
    }
}

module.exports = Show;