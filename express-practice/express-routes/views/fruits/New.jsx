const React = require('react');
const DefaultLayout = require('../layouts/DefaultLayout');

class New extends React.Component {
    render() {
        return (
            <DefaultLayout title="Create a new fruit" foodGroup="fruits">
            <div>
                <h1>New Page</h1>
                <form action="/fruits" method="POST">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name"/><br/><br/>

                    <label htmlFor="color">Color:</label>
                    <input type="text" id="color" name="color"/><br/><br/>

                    <label htmlFor="readyToEat">Is Ready To Eat:</label>
                    <input type="checkbox" id="readyToEat" name="readyToEat"/><br/><br/>

                    <input type="submit" value="Create fruit"/>
                </form>
            </div>
            </DefaultLayout>
        );
    }
}

module.exports = New;