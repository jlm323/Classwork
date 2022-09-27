const React = require('react');
const DefaultLayout = require('../layouts/DefaultLayout');

class New extends React.Component {
    render() {
        return (
            <DefaultLayout  title="Create a new meat" foodGroup="meat">
            <div>
                <h1>New Page: Meat</h1>
                <form action="/meat" method="POST">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name"/><br/><br/>

                    <label htmlFor="type">Type:</label>
                    <input type="text" id="type" name="type"/><br/><br/>

                    <input type="submit" value="Create meat"/>
                </form>
            </div>
            </DefaultLayout>
        )
    }
}

module.exports = New;