const React = require('react');
const DefaultLayout = require('../layouts/DefaultLayout');

class New extends React.Component {
    render() {
        return (
            <DefaultLayout title="All Vegetables" foodGroup="meat">
            <div>
                <h1>New Vegetable</h1>
                <form action="/vegetables" method="POST">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name"/><br/><br/>

                    <label htmlFor="color">Color:</label>
                    <input type="text" id="color" name="color"/><br/><br/>

                    <input type="submit" value="Create vegetable"/>
                </form>
            </div>
            </DefaultLayout>
        )
    }
}

module.exports = New;