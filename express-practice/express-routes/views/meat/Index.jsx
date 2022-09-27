const React = require('react');
const DefaultLayout = require('../layouts/DefaultLayout');

class Index extends React.Component {
    render() {
        // object destructuring (short for const fruits = this.props.fruits)
        const { meat } = this.props;

        return (
            <DefaultLayout title="All Meat" foodGroup="meat">
            <div>
                <h1>Meat Index Page</h1>
                <ul>
                    {meat.map((meat) => {
                        return (
                            <li key={meat._id}>
                                The <a href={`/meat/${meat._id}`}>{meat.name}</a> is {meat.type}.
                            </li>
                        )
                    })}
                    
                </ul>

                <nav>
                    <a href='/meat/New'>Create a new meat</a>
                </nav>
            </div>
            </DefaultLayout>
        );
    }
}

module.exports = Index;