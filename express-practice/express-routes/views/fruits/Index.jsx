const React = require('react');
const DefaultLayout = require('../layouts/DefaultLayout');

class Index extends React.Component {
    render() {
        // object destructuring (short for const fruits = this.props.fruits)
        const { fruits } = this.props;


        // map method
        // loops over data, manipulates data at each index, returns new array with new data

        /* 
            [
                { name: 'pear', ...},
                { name: 'banana', ...},
                { name: 'apple', ...}
            ]
        */
        return (
            <DefaultLayout title="All Fruit" foodGroup="fruits">
                <div>
                    <h1>Fruits Index Page</h1>
                    <ul id="fruit-index">
                        {fruits.map((fruit) => {
                            return (
                                <li key={fruit._id}>
                                    The <a href={`/fruits/${fruit._id}`}>{fruit.name}</a> is {fruit.color}.
                                </li>
                            )
                        })}
                        
                    </ul>

                    <nav>
                        <a href='/fruits/New'>Create a new fruit</a>
                    </nav>
                </div>
            </DefaultLayout>
        );
    }
}

module.exports = Index;