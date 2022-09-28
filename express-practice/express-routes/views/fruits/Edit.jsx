const React = require('react');
const DefaultLayout = require('../layouts/DefaultLayout');

class Edit extends React.Component {
    render() {

        let { fruit } = this.props;

        return (
            <DefaultLayout title="Edit a fruit" foodGroup="fruits">
            <div>
                <h1>Edit Page</h1>
                <form action={`/fruits/${fruit._id}?_method=PUT`} method="POST">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" defaultValue={fruit.name}/><br/><br/>

                    <label htmlFor="color">Color:</label>
                    <input type="text" id="color" name="color" defaultValue={fruit.color}/><br/><br/>

                    <label htmlFor="readyToEat">Is Ready To Eat:</label>
                    <input type="checkbox" id="readyToEat" name="readyToEat" defaultChecked={fruit.readyToEat}/><br/><br/>

                    <input type="submit" value="Edit fruit"/>
                </form>
            </div>
            </DefaultLayout>
        );
    }
}

module.exports = Edit;