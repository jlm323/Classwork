const React = require('react');
const DefaultLayout = require('../layouts/DefaultLayout');

class Show extends React.Component {
    render() {
        // object destructuring
        const { meat } = this.props;

        return (
            <DefaultLayout title={`${meat.name} details`} foodGroup="meat">
            <div>
                <h1>Meat Show Page</h1>
                <p>
                    The {meat.name} is {meat.type}.
                </p>
                <button>
                    <a href={`/meat/${meat._id}/edit`}> Edit</a>
                </button>

                <form action={`/meat/${meat._id}?_method=DELETE`} method="POST">
                    <input type="submit" value="delete" />
                </form>
                <nav>
                    <a href="/meat">Back</a>
                </nav>
            </div>
            </DefaultLayout>
        );
    }
}

module.exports = Show;