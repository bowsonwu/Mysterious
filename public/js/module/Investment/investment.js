class Investment extends React.Component {

    switchFunction(functionName) {
        this.setState({ functionName: functionName });
    }

    render() {

        var menuDOM = React.createElement('div', { className: 'list-group' },
            React.createElement('a', { className: 'list-group-item', href: 'javascript: void(0)', onClick: this.switchFunction.bind(this, 'EDA') },
                'Ex-Dividend Analytics'
            )
        )

        var functionDOM = null;
        if (this.state) {
            switch (this.state.functionName) {
                case 'EDA':
                    functionDOM = React.createElement(InvEDA);
                    break;

                default:
                    break;
            }
        }

        var root = React.createElement('div', { className: 'row' },
            React.createElement('div', { className: 'col-md-3' }, menuDOM),
            React.createElement('div', { className: 'col-md-9' }, functionDOM)
        );

        return root;
    }
}
