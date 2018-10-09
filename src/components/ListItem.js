import React, {Component} from 'react';
import {Text} from 'react-native';
import {CardSection} from "./common/exportComponent";


class ListItem extends Component {

    componentWillMount() {
        console.log(this.props);
    }
    render() {
        const {titleStyle} = styles;

        return(
            <CardSection>
                <Text style={titleStyle}>
                    {this.props.library.title}
                </Text>
            </CardSection>
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 18
    },
    textStyle: {

    }
};

export default ListItem;